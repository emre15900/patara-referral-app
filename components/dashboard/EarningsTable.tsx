"use client";

import { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const transactionData = Array(10).fill(null).map((_, i) => ({
  id: i + 1,
  account: '0x1f20e_e2026',
  amount_in: '1,000.00 SUI',
  amount_out: '2,500.00 USDC',
  price: '$2.50',
  value: '$2,500.00',
  earned_fee: '$0.05',
  time: '1 day ago'
}));

export function EarningsTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  
  const totalPages = Math.ceil(transactionData.length / entriesPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  
  return (
    <motion.div 
      className="bg-zinc-900 rounded-lg border border-zinc-800 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-zinc-800 border-b border-zinc-700">
              <TableHead className="w-[180px] text-zinc-400 font-medium">ACCOUNT</TableHead>
              <TableHead className="text-zinc-400 font-medium">AMOUNT IN</TableHead>
              <TableHead className="text-zinc-400 font-medium">AMOUNT OUT</TableHead>
              <TableHead className="text-zinc-400 font-medium">PRICE</TableHead>
              <TableHead className="text-zinc-400 font-medium">VALUE</TableHead>
              <TableHead className="text-zinc-400 font-medium">EARNED FEE</TableHead>
              <TableHead className="text-right text-zinc-400 font-medium">TIME</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactionData.map((transaction) => (
              <TableRow key={transaction.id} className="border-b border-zinc-800 hover:bg-zinc-800/50">
                <TableCell className="flex items-center gap-2">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-500 w-8 h-8 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">P</span>
                  </div>
                  <span>{transaction.account}</span>
                </TableCell>
                <TableCell>{transaction.amount_in}</TableCell>
                <TableCell>{transaction.amount_out}</TableCell>
                <TableCell>{transaction.price}</TableCell>
                <TableCell>{transaction.value}</TableCell>
                <TableCell>{transaction.earned_fee}</TableCell>
                <TableCell className="text-right">{transaction.time}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
      {/* Pagination */}
      <div className="p-4 flex items-center justify-between bg-zinc-800/50 border-t border-zinc-700">
        <div className="flex items-center gap-2">
          <span className="text-sm text-zinc-400">10 Transaction</span>
          <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400">
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>
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
          
          {pageNumbers.map((page) => (
            <Button
              key={page}
              variant={page === currentPage ? "default" : "outline"}
              className={`h-8 w-8 ${
                page === currentPage
                  ? "bg-zinc-700 text-white"
                  : "bg-zinc-800 border-zinc-700 text-zinc-400 hover:bg-zinc-700"
              }`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </Button>
          ))}
          
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