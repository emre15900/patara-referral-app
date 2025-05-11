import { Button } from '@/components/ui/button';
import { OrbitAnimation } from '@/components/common/OrbitAnimation';
import { AuthLayout } from '@/components/layouts/AuthLayout';
import Link from 'next/link';

export default function Home() {
  return (
    <AuthLayout>
      <div className="max-w-md w-full bg-zinc-900/60 backdrop-blur-sm p-12 rounded-2xl border border-zinc-800 shadow-xl z-10">
        <div className="flex flex-col items-center text-center">
          <div className="mb-10 relative">
            <OrbitAnimation />
          </div>

          <h2 className="text-xl sm:text-xl font-semibold mb-4">
            Refer friends and earn with Patara!
          </h2>

          <p className="text-[#808080] text-sm mb-8">
            Invite your friends to Patara and earn a share of <br /> their on-chain rewards forever!
          </p>

          <Link href='/dashboard'>
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl p-6"
            >
              Connect/Sign in
            </Button>
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
} 