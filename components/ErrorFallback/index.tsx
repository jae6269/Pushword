import { FallbackProps } from 'react-error-boundary';

export default function ErrorFallback({
  error,
  resetErrorBoundary,
}: FallbackProps) {
  const errorStatus = error.toString().split('code')[1];

  const handleResetButtonClick = () => {
    resetErrorBoundary();
  };

  return <div>에러</div>;
}
