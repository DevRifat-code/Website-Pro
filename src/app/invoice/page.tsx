'use client';
import { useState } from 'react';
import { Download, Printer, Send, FileText, Plus, Trash2, Building, User, Mail, Phone, Calendar } from 'lucide-react';

interface InvoiceItem {
  id: number;
  description: string;
  quantity: number;
  price: number;
}

const invoiceData = {
  invoiceNumber: 'INV-2024-001',
  date: new Date().toISOString().split('T')[0],
  dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
  from: {
    name: 'MD. RIFAT HOSSAIN',
    address: 'Dinajpur, Bangladesh',
    email: 'mdrifathossainpersonal@gmail.com',
    phone: '+8801XXXXXXXXX',
  },
  to: {
    name: '',
    address: '',
    email: '',
  },
};

export default function InvoicePage() {
  const [items, setItems] = useState<InvoiceItem[]>([
    { id: 1, description: 'Invoice Software License', quantity: 1, price: 49 },
  ]);
  const [invoiceNumber, setInvoiceNumber] = useState(invoiceData.invoiceNumber);
  const [date, setDate] = useState(invoiceData.date);
  const [clientName, setClientName] = useState('');
  const [clientAddress, setClientAddress] = useState('');
  const [clientEmail, setClientEmail] = useState('');

  const subtotal = items.reduce((sum, item) => sum + item.quantity * item.price, 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  const addItem = () => {
    setItems([...items, { id: Date.now(), description: '', quantity: 1, price: 0 }]);
  };

  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  const updateItem = (id: number, field: keyof InvoiceItem, value: string | number) => {
    setItems(items.map(item => item.id === id ? { ...item, [field]: value } : item));
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    alert('PDF download coming soon!');
  };

  const handleEmail = () => {
    alert('Invoice sent to ' + clientEmail);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8 no-print">
          <h1 className="text-3xl font-bold text-gray-900">Invoice Generator</h1>
          <div className="flex gap-4">
            <button onClick={handleEmail} className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              <Send className="w-4 h-4" /> Send
            </button>
            <button onClick={handlePrint} className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900">
              <Printer className="w-4 h-4" /> Print
            </button>
            <button onClick={handleDownload} className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
              <Download className="w-4 h-4" /> PDF
            </button>
          </div>
        </div>

        {/* Invoice Preview */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          {/* Header */}
          <div className="flex justify-between items-start mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <FileText className="w-8 h-8 text-blue-600" />
                <span className="text-2xl font-bold text-gray-900">INVOICE</span>
              </div>
              <p className="text-gray-500"># {invoiceNumber}</p>
            </div>
            <div className="text-right">
              <p className="font-bold text-gray-900">{invoiceData.from.name}</p>
              <p className="text-sm text-gray-500">{invoiceData.from.address}</p>
              <p className="text-sm text-gray-500">{invoiceData.from.email}</p>
              <p className="text-sm text-gray-500">{invoiceData.from.phone}</p>
            </div>
          </div>

          {/* Dates */}
          <div className="flex justify-end gap-8 mb-8">
            <div>
              <p className="text-sm text-gray-500">Invoice Date</p>
              <p className="font-medium text-gray-900">{date}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Due Date</p>
              <p className="font-medium text-gray-900">{invoiceData.dueDate}</p>
            </div>
          </div>

          {/* Bill To */}
          <div className="mb-8 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-500 mb-2">Bill To:</p>
            <div className="no-print">
              <input type="text" value={clientName} onChange={(e) => setClientName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 rounded mb-2" placeholder="Client Name" />
              <input type="text" value={clientAddress} onChange={(e) => setClientAddress(e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 mb-2" placeholder="Address" />
              <input type="email" value={clientEmail} onChange={(e) => setClientEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-200" placeholder="Email" />
            </div>
            {clientName && (
              <div className="print-only">
                <p className="font-medium text-gray-900">{clientName}</p>
                <p className="text-sm text-gray-500">{clientAddress}</p>
                <p className="text-sm text-gray-500">{clientEmail}</p>
              </div>
            )}
          </div>

          {/* Items */}
          <table className="w-full mb-8">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-3 text-gray-600">Description</th>
                <th className="text-right py-3 text-gray-600">Qty</th>
                <th className="text-right py-3 text-gray-600">Price</th>
                <th className="text-right py-3 text-gray-600">Total</th>
                <th className="w-10 no-print"></th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id} className="border-b border-gray-100">
                  <td className="py-3">
                    <input type="text" value={item.description} onChange={(e) => updateItem(item.id, 'description', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-200 rounded no-print" placeholder="Description" />
                    <span className="print-only">{item.description || '-'}</span>
                  </td>
                  <td className="py-3 text-right">
                    <input type="number" value={item.quantity} onChange={(e) => updateItem(item.id, 'quantity', parseInt(e.target.value) || 0)}
                      className="w-20 px-3 py-2 border border-gray-200 rounded text-right no-print" min="1" />
                    <span className="print-only">{item.quantity}</span>
                  </td>
                  <td className="py-3 text-right">
                    <input type="number" value={item.price} onChange={(e) => updateItem(item.id, 'price', parseFloat(e.target.value) || 0)}
                      className="w-24 px-3 py-2 border border-gray-200 rounded text-right no-print" />
                    <span className="print-only">${item.price.toFixed(2)}</span>
                  </td>
                  <td className="py-3 text-right font-medium text-gray-900">${(item.quantity * item.price).toFixed(2)}</td>
                  <td className="py-3 no-print">
                    <button onClick={() => removeItem(item.id)} className="text-red-500 hover:text-red-700">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <button onClick={addItem} className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8 no-print">
            <Plus className="w-4 h-4" /> Add Item
          </button>

          {/* Totals */}
          <div className="flex justify-end">
            <div className="w-64">
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium text-gray-900">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Tax (10%)</span>
                <span className="font-medium text-gray-900">${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between py-2 border-t-2 border-gray-900">
                <span className="font-bold text-gray-900">Total</span>
                <span className="font-bold text-xl text-gray-900">${total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-500">Thank you for your business!</p>
            <p className="text-sm text-gray-500">Payment is due within 30 days.</p>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @media print {
          .no-print { display: none !important; }
          .print-only { display: block !important; }
        }
        .print-only { display: none; }
      `}</style>
    </div>
  );
}