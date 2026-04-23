'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { CreditCard, Smartphone, CheckCircle, Loader2 } from 'lucide-react';

const products = [
  { id: 1, name: 'Invoice Software', price: 49, description: 'Complete invoicing & billing management system' },
  { id: 2, name: 'E-Commerce System', price: 79, description: 'Full featured e-commerce platform' },
  { id: 3, name: 'News Portal', price: 39, description: 'Professional news & magazine website' },
  { id: 4, name: 'School Management', price: 69, description: 'Complete school management system' },
];

export default function PaymentPage() {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [method, setMethod] = useState<'bkash' | 'stripe'>('bkash');
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const router = useRouter();

  const handlebKashPayment = async () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(3);
    }, 2000);
  };

  const handleStripePayment = async () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push('/');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-4">Checkout</h1>
        <p className="text-gray-400 text-center mb-12">Secure payment for your product</p>

        {step === 1 && (
          <>
            {/* Product Selection */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 mb-8">
              <h2 className="text-xl font-bold text-white mb-6">Select Product</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {products.map((product) => (
                  <button key={product.id} onClick={() => setSelectedProduct(product)}
                    className={`p-4 rounded-xl text-left transition-all ${selectedProduct.id === product.id ? 'bg-blue-600 border-2 border-blue-400' : 'bg-white/10 border-2 border-transparent hover:border-white/30'}`}>
                    <p className="font-bold text-white">{product.name}</p>
                    <p className="text-sm text-gray-300">{product.description}</p>
                    <p className="text-xl font-bold text-blue-300 mt-2">${product.price}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 mb-8">
              <h2 className="text-xl font-bold text-white mb-6">Payment Method</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button onClick={() => setMethod('bkash')}
                  className={`p-6 rounded-xl text-center transition-all ${method === 'bkash' ? 'bg-blue-600 border-2 border-blue-400' : 'bg-white/10 border-2 border-transparent hover:border-white/30'}`}>
                  <Smartphone className="w-12 h-12 text-white mx-auto mb-2" />
                  <p className="font-bold text-white">bKash</p>
                  <p className="text-sm text-gray-300">Mobile Banking</p>
                </button>
                <button onClick={() => setMethod('stripe')}
                  className={`p-6 rounded-xl text-center transition-all ${method === 'stripe' ? 'bg-blue-600 border-2 border-blue-400' : 'bg-white/10 border-2 border-transparent hover:border-white/30'}`}>
                  <CreditCard className="w-12 h-12 text-white mx-auto mb-2" />
                  <p className="font-bold text-white">Stripe</p>
                  <p className="text-sm text-gray-300">Card Payment</p>
                </button>
              </div>
            </div>

            {/* Total */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 mb-8">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Total Amount</span>
                <span className="text-3xl font-bold text-white">${selectedProduct.price}</span>
              </div>
              <button onClick={method === 'bkash' ? handlebKashPayment : handleStripePayment} disabled={loading}
                className="w-full mt-6 bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all disabled:opacity-50 flex items-center justify-center gap-2">
                {loading && <Loader2 className="animate-spin w-5 h-5" />}
                {loading ? 'Processing...' : `Pay $${selectedProduct.price}`}
              </button>
            </div>
          </>
        )}

        {step === 2 && method === 'bkash' && (
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <h2 className="text-xl font-bold text-white mb-6">bKash Payment</h2>
            <div className="bg-white/5 rounded-xl p-4 mb-6">
              <p className="text-gray-300 mb-2">Send money to:</p>
              <p className="text-2xl font-bold text-white">01XXXXXXXXX</p>
            </div>
            <div className="mb-6">
              <label className="block text-gray-300 mb-2">Your bKash Number</label>
              <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white" placeholder="01XXXXXXXXX" />
            </div>
            <div className="mb-6">
              <label className="block text-gray-300 mb-2">Transaction ID</label>
              <input type="text" value={transactionId} onChange={(e) => setTransactionId(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white" placeholder="XXXXXXXXXX" />
            </div>
            <button onClick={handlebKashPayment} disabled={loading || !phone || !transactionId}
              className="w-full bg-green-600 text-white py-4 rounded-xl font-bold hover:bg-green-700 transition-all disabled:opacity-50 flex items-center justify-center gap-2">
              {loading && <Loader2 className="animate-spin w-5 h-5" />}
              {loading ? 'Verifying...' : 'Verify Payment'}
            </button>
          </div>
        )}

        {step === 3 && (
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 text-center">
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-2">Payment Successful!</h2>
            <p className="text-gray-300 mb-6">Your payment has been verified. Check your email for the product.</p>
            <div className="flex gap-4 justify-center">
              <button onClick={() => router.push('/')} className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700">
                Go to Home
              </button>
              <a href="/" className="border border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white/10">
                Back to Home
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}