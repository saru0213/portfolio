import { Suspense } from 'react';
import ResetPassword from '../Components/resetPassword';


export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<div>Loading reset form...</div>}>
      <ResetPassword />
    </Suspense>
  );
}
