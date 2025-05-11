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
import { motion } from 'framer-motion';
import Image from 'next/image';

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
      <div className="p-4 border-b border-zinc-800 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex items-center gap-2 flex-wrap">
          {/* Type Filter */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="bg-zinc-800 border-zinc-700 text-zinc-300 hover:bg-zinc-700">
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
              <Button variant="outline" className="bg-zinc-800 border-zinc-700 text-zinc-300 hover:bg-zinc-700">
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
            className="text-blue-400 hover:text-blue-300"
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
        <div className="relative w-full sm:w-auto">
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
            className="pl-10 bg-zinc-800 border-zinc-700 text-white w-full sm:w-60"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-zinc-800 border-b border-zinc-700 hover:bg-zinc-800">
              <TableHead
                className="text-zinc-400 font-medium cursor-pointer"
                onClick={() => requestSort('account')}
              >
                <div className="flex items-center">
                  ACCOUNT
                  {getSortIcon('account')}
                </div>
              </TableHead>
              <TableHead
                className="text-zinc-400 font-medium cursor-pointer"
                onClick={() => requestSort('amount_in')}
              >
                <div className="flex items-center">
                  AMOUNT IN
                  {getSortIcon('amount_in')}
                </div>
              </TableHead>
              <TableHead
                className="text-zinc-400 font-medium cursor-pointer"
                onClick={() => requestSort('amount_out')}
              >
                <div className="flex items-center">
                  AMOUNT OUT
                  {getSortIcon('amount_out')}
                </div>
              </TableHead>
              <TableHead
                className="text-zinc-400 font-medium cursor-pointer"
                onClick={() => requestSort('price')}
              >
                <div className="flex items-center">
                  PRICE
                  {getSortIcon('price')}
                </div>
              </TableHead>
              <TableHead
                className="text-zinc-400 font-medium cursor-pointer"
                onClick={() => requestSort('value')}
              >
                <div className="flex items-center">
                  VALUE
                  {getSortIcon('value')}
                </div>
              </TableHead>
              <TableHead
                className="text-zinc-400 font-medium cursor-pointer"
                onClick={() => requestSort('earned_fee')}
              >
                <div className="flex items-center">
                  EARNED FEE
                  {getSortIcon('earned_fee')}
                </div>
              </TableHead>
              <TableHead
                className="text-zinc-400 font-medium cursor-pointer"
                onClick={() => requestSort('type')}
              >
                <div className="flex items-center">
                  TYPE
                  {getSortIcon('type')}
                </div>
              </TableHead>
              <TableHead
                className="text-right text-zinc-400 font-medium cursor-pointer"
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
                <TableRow key={transaction.id} className="border-b border-zinc-800 hover:bg-zinc-800/50">
                  <TableCell className="flex items-center gap-2">
                    {!imageError ? (
                      <Image
                        src="/images/orbit-logo.png"
                        alt="Patara"
                        width={40}
                        height={40}
                        onError={() => setImageError(true)}
                      />
                    ) : (
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                        P
                      </div>
                    )}
                    <span>{transaction.account}</span>
                  </TableCell>
                  <TableCell>{transaction.amount_in}</TableCell>
                  <TableCell>{transaction.amount_out}</TableCell>
                  <TableCell>{transaction.price}</TableCell>
                  <TableCell>{transaction.value}</TableCell>
                  <TableCell>{transaction.earned_fee}</TableCell>
                  <TableCell>
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${transaction.type === 'swap' ? 'bg-blue-500/20 text-blue-400' :
                      transaction.type === 'buy' ? 'bg-green-500/20 text-green-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                      {transaction.type.toLocaleUpperCase()}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">{transaction.time}</TableCell>
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
      <div className="p-4 flex items-center justify-between bg-zinc-800/50 border-t border-zinc-700">
        <div className="flex items-center gap-2">
          <span className="text-sm text-zinc-400">{filteredData.length} Transactions</span>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="h-8 px-2 text-zinc-400">
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
                  className="cursor-pointer"
                >
                  {number} entries
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex items-center gap-1">
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
    </motion.div>
  );
} 