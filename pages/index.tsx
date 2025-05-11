import { Button } from '@/components/ui/button';
import { OrbitAnimation } from '@/components/common/OrbitAnimation';
import { AuthLayout } from '@/components/layouts/AuthLayout';

export default function Home() {
  return (
    <AuthLayout>
      <div className="max-w-md w-full bg-zinc-900/60 backdrop-blur-sm p-12 rounded-lg border border-zinc-800 shadow-xl z-10">
        <div className="flex flex-col items-center text-center">
          <div className="mb-10 relative">
            <OrbitAnimation />
          </div>

          <h1 className="text-2xl sm:text-3xl font-semibold mb-4">
            Refer friends and earn with Patara!
          </h1>

          <p className="text-zinc-400 mb-8">
            Invite your friends to Patara and earn a share of their on-chain rewards forever!
          </p>

          <Button
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full w-full py-6"
            onClick={() => window.location.href = '/dashboard'}
          >
            Connect/Sign in
          </Button>
        </div>
      </div>
    </AuthLayout>
  );
} 