"use client";

import { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator
} from '@/components/ui/dropdown-menu';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose
} from "@/components/ui/dialog";
import { X } from "lucide-react";

interface TransactionType {
  id: number;
  account: string;
  amount_in: string;
  amount_out: string;
  price: string;
  value: string;
  earned_fee: string;
  time: string;
  type: string;
  [key: string]: string | number;
}

const generateTransactionData = (count: number): TransactionType[] => Array(count).fill(null).map((_, i) => ({
  id: i + 1,
  account: `0x${Math.random().toString(16).slice(2, 10)}_${Math.random().toString(16).slice(2, 10)}`,
  amount_in: `${(Math.random() * 5000).toFixed(2)} SUI`,
  amount_out: `${(Math.random() * 10000).toFixed(2)} USDC`,
  price: `$${(Math.random() * 5).toFixed(2)}`,
  value: `$${(Math.random() * 10000).toFixed(2)}`,
  earned_fee: `$${(Math.random() * 0.2).toFixed(2)}`,
  time: `${Math.floor(Math.random() * 30) + 1} ${['minute', 'hour', 'day'][Math.floor(Math.random() * 3)]}${Math.random() > 0.5 ? 's' : ''} ago`,
  type: ['swap', 'buy', 'sell'][Math.floor(Math.random() * 3)]
}));

const transactionData = generateTransactionData(40);

export function FilterableEarningsTable() {
  const [imageError, setImageError] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState<TransactionType[]>(transactionData);
  const [filters, setFilters] = useState({
    type: 'all',
    timeRange: 'all'
  });
  const [sortConfig, setSortConfig] = useState<{
    key: string | null;
    direction: 'asc' | 'desc';
  }>({
    key: null,
    direction: 'asc'
  });
  
  // New state for the modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState<TransactionType | null>(null);

  // Handle row click to open the modal
  const handleRowClick = (transaction: TransactionType) => {
    setSelectedTransaction(transaction);
    setIsModalOpen(true);
  };

  useEffect(() => {
    let result = [...transactionData];

    if (filters.type !== 'all') {
      result = result.filter(item => item.type === filters.type);
    }

    if (filters.timeRange !== 'all') {
      const timeString = filters.timeRange.toLowerCase();
      result = result.filter(item => item.time.toLowerCase().includes(timeString));
    }

    if (search) {
      const searchLower = search.toLowerCase();
      result = result.filter(item =>
        item.account.toLowerCase().includes(searchLower) ||
        item.amount_in.toLowerCase().includes(searchLower) ||
        item.amount_out.toLowerCase().includes(searchLower) ||
        item.value.toLowerCase().includes(searchLower) ||
        item.earned_fee.toLowerCase().includes(searchLower)
      );
    }

    if (sortConfig.key) {
      const key = sortConfig.key as string;
      result.sort((a, b) => {
        if (a[key] < b[key]) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[key] > b[key]) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }

    setFilteredData(result);
  }, [filters, search, sortConfig]);

  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = filteredData.slice(indexOfFirstEntry, indexOfLastEntry);
  const totalPages = Math.ceil(filteredData.length / entriesPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  useEffect(() => {
    setCurrentPage(1);
  }, [filteredData.length]);

  const requestSort = (key: string) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const getSortIcon = (key: string) => {
    if (sortConfig.key !== key) {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 opacity-30">
          <path d="m7 15 5 5 5-5" />
          <path d="m7 9 5-5 5 5" />
        </svg>
      );
    }

    if (sortConfig.direction === 'asc') {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
          <path d="m7 15 5 5 5-5" />
        </svg>
      );
    }

    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
        <path d="m7 9 5-5 5 5" />
      </svg>
    );
  };

  return (
    <motion.div
      className="bg-zinc-900 rounded-xl overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {/* Filters */}
      <div className="p-4 border-b border-zinc-800 flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
        <div className="flex items-center gap-2 flex-wrap w-full lg:w-auto">
          {/* Type Filter */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="bg-zinc-800 border-zinc-700 text-zinc-300 hover:bg-zinc-700 text-sm whitespace-nowrap">
                Type: {filters.type.charAt(0).toUpperCase() + filters.type.slice(1)}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-zinc-900 border-zinc-800 text-white">
              <DropdownMenuItem
                onClick={() => setFilters({ ...filters, type: 'all' })}
                className="cursor-pointer"
              >
                All Types
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-zinc-800" />
              <DropdownMenuItem
                onClick={() => setFilters({ ...filters, type: 'swap' })}
                className="cursor-pointer"
              >
                Swap
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setFilters({ ...filters, type: 'buy' })}
                className="cursor-pointer"
              >
                Buy
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setFilters({ ...filters, type: 'sell' })}
                className="cursor-pointer"
              >
                Sell
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Time Range Filter */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="bg-zinc-800 border-zinc-700 text-zinc-300 hover:bg-zinc-700 text-sm whitespace-nowrap">
                Time: {filters.timeRange.charAt(0).toUpperCase() + filters.timeRange.slice(1)}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-zinc-900 border-zinc-800 text-white">
              <DropdownMenuItem
                onClick={() => setFilters({ ...filters, timeRange: 'all' })}
                className="cursor-pointer"
              >
                All Time
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-zinc-800" />
              <DropdownMenuItem
                onClick={() => setFilters({ ...filters, timeRange: 'minute' })}
                className="cursor-pointer"
              >
                Minutes
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setFilters({ ...filters, timeRange: 'hour' })}
                className="cursor-pointer"
              >
                Hours
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setFilters({ ...filters, timeRange: 'day' })}
                className="cursor-pointer"
              >
                Days
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Reset button */}
          <Button
            variant="ghost"
            size="sm"
            className="text-blue-400 hover:text-blue-300 text-sm"
            onClick={() => {
              setFilters({ type: 'all', timeRange: 'all' });
              setSearch('');
              setSortConfig({ key: null, direction: 'asc' });
            }}
          >
            Reset
          </Button>
        </div>

        {/* Search box */}
        <div className="relative w-full lg:w-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <Input
            type="text"
            placeholder="Search transactions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 bg-zinc-800 border-zinc-700 text-white w-full lg:w-60"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-zinc-800 border-b border-zinc-700 hover:bg-zinc-800">
              <TableHead
                className="text-zinc-400 font-medium cursor-pointer whitespace-nowrap"
                onClick={() => requestSort('account')}
              >
                <div className="flex items-center">
                  ACCOUNT
                  {getSortIcon('account')}
                </div>
              </TableHead>
              <TableHead
                className="text-zinc-400 font-medium cursor-pointer whitespace-nowrap hidden md:table-cell"
                onClick={() => requestSort('amount_in')}
              >
                <div className="flex items-center">
                  AMOUNT IN
                  {getSortIcon('amount_in')}
                </div>
              </TableHead>
              <TableHead
                className="text-zinc-400 font-medium cursor-pointer whitespace-nowrap hidden md:table-cell"
                onClick={() => requestSort('amount_out')}
              >
                <div className="flex items-center">
                  AMOUNT OUT
                  {getSortIcon('amount_out')}
                </div>
              </TableHead>
              <TableHead
                className="text-zinc-400 font-medium cursor-pointer whitespace-nowrap"
                onClick={() => requestSort('price')}
              >
                <div className="flex items-center">
                  PRICE
                  {getSortIcon('price')}
                </div>
              </TableHead>
              <TableHead
                className="text-zinc-400 font-medium cursor-pointer whitespace-nowrap hidden sm:table-cell"
                onClick={() => requestSort('value')}
              >
                <div className="flex items-center">
                  VALUE
                  {getSortIcon('value')}
                </div>
              </TableHead>
              <TableHead
                className="text-zinc-400 font-medium cursor-pointer whitespace-nowrap"
                onClick={() => requestSort('earned_fee')}
              >
                <div className="flex items-center">
                  FEE
                  {getSortIcon('earned_fee')}
                </div>
              </TableHead>
              <TableHead
                className="text-zinc-400 font-medium cursor-pointer whitespace-nowrap"
                onClick={() => requestSort('type')}
              >
                <div className="flex items-center">
                  TYPE
                  {getSortIcon('type')}
                </div>
              </TableHead>
              <TableHead
                className="text-right text-zinc-400 font-medium cursor-pointer whitespace-nowrap hidden sm:table-cell"
                onClick={() => requestSort('time')}
              >
                <div className="flex items-center justify-end">
                  TIME
                  {getSortIcon('time')}
                </div>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentEntries.length > 0 ? (
              currentEntries.map((transaction) => (
                <TableRow 
                  key={transaction.id} 
                  className="border-b border-zinc-800 hover:bg-zinc-800/50 cursor-pointer"
                  onClick={() => handleRowClick(transaction)}
                >
                  <TableCell className="flex items-center gap-2 max-w-[150px] md:max-w-none">
                    {!imageError ? (
                      <Image
                        src="/images/orbit-logo.png"
                        alt="Patara"
                        width={24}
                        height={24}
                        className="min-w-[24px]"
                        onError={() => setImageError(true)}
                      />
                    ) : (
                      <div className="w-6 h-6 min-w-[24px] bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xs">
                        P
                      </div>
                    )}
                    <span className="truncate text-sm">{transaction.account}</span>
                  </TableCell>
                  <TableCell className="whitespace-nowrap hidden md:table-cell text-sm">{transaction.amount_in}</TableCell>
                  <TableCell className="whitespace-nowrap hidden md:table-cell text-sm">{transaction.amount_out}</TableCell>
                  <TableCell className="whitespace-nowrap text-sm">{transaction.price}</TableCell>
                  <TableCell className="whitespace-nowrap hidden sm:table-cell text-sm">{transaction.value}</TableCell>
                  <TableCell className="whitespace-nowrap text-sm">{transaction.earned_fee}</TableCell>
                  <TableCell>
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${transaction.type === 'swap' ? 'bg-blue-500/20 text-blue-400' :
                      transaction.type === 'buy' ? 'bg-green-500/20 text-green-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                      {transaction.type.toLocaleUpperCase()}
                    </span>
                  </TableCell>
                  <TableCell className="text-right whitespace-nowrap hidden sm:table-cell text-sm">{transaction.time}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={8} className="text-center py-8 text-zinc-400">
                  No transactions found matching your filters.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="p-4 flex flex-col sm:flex-row items-center justify-between bg-zinc-800/50 border-t border-zinc-700 gap-4">
        <div className="flex items-center gap-2 w-full sm:w-auto justify-center sm:justify-start">
          <span className="text-xs sm:text-sm text-zinc-400">{filteredData.length} Transactions</span>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="h-8 px-2 text-zinc-400 text-xs sm:text-sm">
                <span className="mr-1">{entriesPerPage}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-zinc-900 border-zinc-800 text-white">
              {[5, 10, 20, 50, 100].map(number => (
                <DropdownMenuItem
                  key={number}
                  onClick={() => setEntriesPerPage(number)}
                  className="cursor-pointer text-xs sm:text-sm"
                >
                  {number} entries
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex items-center justify-center gap-1 order-first sm:order-none w-full sm:w-auto">
          {totalPages <= 5 ? (
            pageNumbers.map((page) => (
              <Button
                key={page}
                variant={page === currentPage ? "default" : "outline"}
                className={`h-8 w-8 ${page === currentPage
                  ? "bg-zinc-700 text-white"
                  : "bg-zinc-800 border-zinc-700 text-zinc-400 hover:bg-zinc-700"
                  }`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </Button>
            ))
          ) : (
            <>
              <Button
                variant={currentPage === 1 ? "default" : "outline"}
                className={`h-8 w-8 ${currentPage === 1
                  ? "bg-zinc-700 text-white"
                  : "bg-zinc-800 border-zinc-700 text-zinc-400 hover:bg-zinc-700"
                  }`}
                onClick={() => setCurrentPage(1)}
              >
                1
              </Button>

              {currentPage > 3 && (
                <Button
                  variant="outline"
                  className="h-8 w-8 bg-zinc-800 border-zinc-700 text-zinc-400"
                  disabled
                >
                  ...
                </Button>
              )}

              {pageNumbers
                .filter(page => page !== 1 && page !== totalPages && Math.abs(page - currentPage) <= 1)
                .map(page => (
                  <Button
                    key={page}
                    variant={page === currentPage ? "default" : "outline"}
                    className={`h-8 w-8 ${page === currentPage
                      ? "bg-zinc-700 text-white"
                      : "bg-zinc-800 border-zinc-700 text-zinc-400 hover:bg-zinc-700"
                      }`}
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </Button>
                ))
              }

              {currentPage < totalPages - 2 && (
                <Button
                  variant="outline"
                  className="h-8 w-8 bg-zinc-800 border-zinc-700 text-zinc-400"
                  disabled
                >
                  ...
                </Button>
              )}

              <Button
                variant={currentPage === totalPages ? "default" : "outline"}
                className={`h-8 w-8 ${currentPage === totalPages
                  ? "bg-zinc-700 text-white"
                  : "bg-zinc-800 border-zinc-700 text-zinc-400 hover:bg-zinc-700"
                  }`}
                onClick={() => setCurrentPage(totalPages)}
              >
                {totalPages}
              </Button>
            </>
          )}
        </div>

        <div className="flex items-center gap-1 w-full sm:w-auto justify-center sm:justify-end">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 bg-zinc-800 border-zinc-700 text-zinc-400 hover:bg-zinc-700"
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 bg-zinc-800 border-zinc-700 text-zinc-400 hover:bg-zinc-700"
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </Button>
        </div>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="bg-zinc-900 border-zinc-800 text-white max-w-2xl">
          <DialogHeader>
            <div className="flex items-center justify-between">
              <DialogTitle className="text-xl font-semibold text-white">
                Transaction Details
              </DialogTitle>
            </div>
            <DialogDescription className="text-zinc-400">
              Complete details of the selected transaction
            </DialogDescription>
          </DialogHeader>
          
          {selectedTransaction && (
            <div className="py-4 space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <p className="text-zinc-500 text-sm mb-1">Transaction ID</p>
                  <p className="font-medium">#{selectedTransaction.id}</p>
                </div>
                <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium ${selectedTransaction.type === 'swap' ? 'bg-blue-500/20 text-blue-400' :
                  selectedTransaction.type === 'buy' ? 'bg-green-500/20 text-green-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>
                  {selectedTransaction.type.toLocaleUpperCase()}
                </span>
              </div>
              
              <div>
                <p className="text-zinc-500 text-sm mb-1">Account</p>
                <div className="flex items-center gap-2">
                  {!imageError ? (
                    <Image
                      src="/images/orbit-logo.png"
                      alt="Patara"
                      width={24}
                      height={24}
                      className="min-w-[24px]"
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <div className="w-6 h-6 min-w-[24px] bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xs">
                      P
                    </div>
                  )}
                  <span className="font-mono text-sm break-all">
                    {selectedTransaction.account}
                  </span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <p className="text-zinc-500 text-sm mb-1">Amount In</p>
                  <p className="font-medium">{selectedTransaction.amount_in}</p>
                </div>
                <div>
                  <p className="text-zinc-500 text-sm mb-1">Amount Out</p>
                  <p className="font-medium">{selectedTransaction.amount_out}</p>
                </div>
                <div>
                  <p className="text-zinc-500 text-sm mb-1">Price</p>
                  <p className="font-medium">{selectedTransaction.price}</p>
                </div>
                <div>
                  <p className="text-zinc-500 text-sm mb-1">Value</p>
                  <p className="font-medium">{selectedTransaction.value}</p>
                </div>
                <div>
                  <p className="text-zinc-500 text-sm mb-1">Earned Fee</p>
                  <p className="font-medium">{selectedTransaction.earned_fee}</p>
                </div>
                <div>
                  <p className="text-zinc-500 text-sm mb-1">Time</p>
                  <p className="font-medium">{selectedTransaction.time}</p>
                </div>
              </div>
              
              <div className="pt-4 border-t border-zinc-800 flex justify-end gap-2">
                <Button
                  variant="outline"
                  className="bg-zinc-800 border-zinc-700 text-zinc-300 hover:bg-zinc-700"
                  onClick={() => setIsModalOpen(false)}
                >
                  Close
                </Button>
                <Button
                  variant="default"
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  View Explorer
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </motion.div>
  );
} 