import { useRouter } from 'next/router';
import { SEO, Auth, SignInForm } from '@components';

const BrandsSignIn = () => {
  const router = useRouter();

  const handleSubmit = async values => {
    console.log(values);
    router.push('/brands/apparel');
  };

  return (
    <>
      <SEO title="Title" description="description" />
      <Auth title="Join Scizzor & Increase Your Instore Appointments">
        <p className="text-center font-medium md:hidden">Sign in to Scizzor</p>
        <h3 className="hidden mb-3 md:block">Sign In to Scizzor</h3>
        <SignInForm onSubmit={handleSubmit} />
        <p className="mt-5">Forgot your password?</p>
        <p>
          Don't have an account?{' '}
          <span className="text-primary">Create one here</span>
        </p>
      </Auth>
    </>
  );
};

export default BrandsSignIn;
