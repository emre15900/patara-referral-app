import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const transactions = Array(10).fill(null).map((_, i) => ({
  id: i,
  account: `0x1f2De_e2026${i}`,
  amountIn: '1,000.00 SUI',
  amountOut: '2,500.00 USDC',
  price: '$2.50',
  value: '$2,500.00',
  earnedFee: '$0.05',
  time: '1 day ago'
}));

const TransactionTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="text-left text-xs text-gray-500 border-b border-[var(--patara-border)]">
            <th className="py-3 px-4 font-medium">ACCOUNT</th>
            <th className="py-3 px-4 font-medium">AMOUNT IN</th>
            <th className="py-3 px-4 font-medium">AMOUNT OUT</th>
            <th className="py-3 px-4 font-medium">PRICE</th>
            <th className="py-3 px-4 font-medium">VALUE</th>
            <th className="py-3 px-4 font-medium">EARNED FEE</th>
            <th className="py-3 px-4 font-medium">TIME</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx) => (
            <tr key={tx.id} className="border-b border-[var(--patara-border)] hover:bg-black/20">
              <td className="py-4 px-4">
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-blue-500 mr-2 flex items-center justify-center text-white">
                    @
                  </div>
                  <span>{tx.account}</span>
                </div>
              </td>
              <td className="py-4 px-4">{tx.amountIn}</td>
              <td className="py-4 px-4">{tx.amountOut}</td>
              <td className="py-4 px-4">{tx.price}</td>
              <td className="py-4 px-4">{tx.value}</td>
              <td className="py-4 px-4">{tx.earnedFee}</td>
              <td className="py-4 px-4">{tx.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <div className="flex items-center justify-between mt-4 px-4">
        <div className="text-sm text-gray-500">
          10 Transaction
          <span className="inline-block ml-2">
            <select className="bg-[var(--patara-card-bg)] border border-[var(--patara-border)] rounded p-1 text-xs">
              <option>10</option>
              <option>25</option>
              <option>50</option>
            </select>
          </span>
        </div>
        
        <div className="flex">
          {[1, 2, 3, '...', 7, 8, 9].map((page, i) => (
            <button 
              key={i}
              className={`w-8 h-8 flex items-center justify-center rounded mx-1 ${
                page === 1 ? 'bg-blue-500 text-white' : 'text-gray-400 hover:bg-[var(--patara-border)]'
              }`}
            >
              {page}
            </button>
          ))}
          <button className="w-8 h-8 flex items-center justify-center rounded mx-1 text-gray-400 hover:bg-[var(--patara-border)]">
            <FiChevronLeft />
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded mx-1 text-gray-400 hover:bg-[var(--patara-border)]">
            <FiChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransactionTable; 