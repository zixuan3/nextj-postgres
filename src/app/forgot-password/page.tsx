import { Heading } from '@/components/heading';
import { AccountTabs } from '@/features/account/components/account-tabs';

const ForgotPasswordPage = () => {
  return (
    <div className="flex flex-col flex-1 gap-y-8">
      <Heading
        title="Forgot Password"
        description="Forgot your password? No worries, we got you!"
        actions={<AccountTabs />}
      />
    </div>
  );
};

export default ForgotPasswordPage;
