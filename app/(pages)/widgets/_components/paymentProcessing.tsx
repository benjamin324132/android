const PaymentProcessing = () => {
  return (
    <div className="w-full rounded-3xl p-4 shadow-md">
      <div>
        <div className="relative size-48 mx-auto">
          <svg
            className="size-full"
            width="36"
            height="36"
            viewBox="0 0 36 36"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="18"
              cy="18"
              r="16"
              fill="none"
              className="stroke-current text-gray-200 dark:text-neutral-700"
              strokeWidth="0.5"
            ></circle>

            <g className="origin-center -rotate-90 transform">
              <circle
                cx="18"
                cy="18"
                r="16"
                fill="none"
                className="stroke-current text-blue-600 dark:text-blue-500"
                strokeWidth="0.5"
                strokeDasharray="100"
                strokeDashoffset="75"
              ></circle>
            </g>
          </svg>
          <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2 flex flex-col items-center justify-center">
            <p className="text-sm font-bold text-gray-500">Total</p>
            <h3 className="text-2xl font-semibold text-gray-800">$120.00</h3>
            <p className="text-xs font-medium text-gray-500">Secure payment</p>
          </div>
        </div>
      </div>
      <div className="pt-6 flex flex-col items-center justify-center gap-y-2">
        <h3 className="font-extrabold">Payment Processing</h3>
        <p className="text-xs text-gray-400">
          Please wait while your transaction is being processed
        </p>
      </div>
    </div>
  );
};

export default PaymentProcessing;
