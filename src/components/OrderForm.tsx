import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, Phone, AlertCircle, ShoppingBag, RefreshCw } from 'lucide-react';
import { MENU_ITEMS, BUSINESS_INFO } from '../data/foodData';
import { MenuItem } from '../types';

interface OrderFormProps {
  preselectedItem?: MenuItem | null;
}

export const OrderForm: React.FC<OrderFormProps> = ({ preselectedItem }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedItem, setSelectedItem] = useState(MENU_ITEMS[0].id);
  const [quantity, setQuantity] = useState('6');
  const [notes, setNotes] = useState('');

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    name: string;
    phone: string;
    itemName: string;
    quantity: string;
    notes: string;
    orderRef: string;
  } | null>(null);

  // Update selected item if preselected item changes
  useEffect(() => {
    if (preselectedItem) {
      setSelectedItem(preselectedItem.id);
    }
  }, [preselectedItem]);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!name.trim()) {
      newErrors.name = 'Please enter your name';
    }

    const cleanPhone = phone.replace(/[^0-9+]/g, '');
    if (!phone.trim()) {
      newErrors.phone = 'Please enter your phone number';
    } else if (cleanPhone.length < 10) {
      newErrors.phone = 'Please enter a valid phone number (e.g., 03111111111)';
    }

    const qtyNum = parseInt(quantity, 10);
    if (!quantity || isNaN(qtyNum) || qtyNum < 1) {
      newErrors.quantity = 'Quantity must be at least 1';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable frontend request processing
    setTimeout(() => {
      const itemObj = MENU_ITEMS.find((m) => m.id === selectedItem);
      const randomRef = 'MS-' + Math.floor(1000 + Math.random() * 9000);

      setSubmittedData({
        name: name.trim(),
        phone: phone.trim(),
        itemName: itemObj?.name || 'Samosa Selection',
        quantity,
        notes: notes.trim(),
        orderRef: randomRef,
      });

      setIsSubmitting(false);
    }, 600);
  };

  const handleReset = () => {
    setName('');
    setPhone('');
    setSelectedItem(MENU_ITEMS[0].id);
    setQuantity('6');
    setNotes('');
    setErrors({});
    setSubmittedData(null);
  };

  return (
    <div
      id="order-form-container"
      className="bg-[#FFF9EF] p-6 sm:p-8 lg:p-10 rounded-3xl border border-[#F4E4C8] shadow-md"
    >
      {submittedData ? (
        /* Order Confirmation View */
        <div
          id="order-success-card"
          className="text-center py-6 px-4 animate-in fade-in duration-300"
        >
          <div className="w-16 h-16 bg-[#321A12] text-[#D99532] rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
            <CheckCircle2 className="w-9 h-9 text-[#E86F24]" />
          </div>

          <span className="text-xs font-bold uppercase tracking-widest text-[#8A3F18]">
            Order Request Received
          </span>

          <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#321A12] mt-1 mb-2">
            Shukriya, {submittedData.name}!
          </h3>

          <p className="text-sm text-[#725447] max-w-md mx-auto mb-6">
            We have received your request for <strong>{submittedData.quantity}x {submittedData.itemName}</strong>.
            Your order reference is <strong className="text-[#321A12]">{submittedData.orderRef}</strong>.
          </p>

          <div className="bg-[#FFF4DF] p-5 rounded-2xl border border-[#D99532]/40 text-left max-w-md mx-auto mb-6">
            <div className="flex items-center justify-between pb-3 border-b border-[#F4E4C8] text-xs font-semibold text-[#725447]">
              <span>Customer:</span>
              <span className="text-[#321A12] font-bold">{submittedData.name} ({submittedData.phone})</span>
            </div>
            <div className="flex items-center justify-between py-2.5 border-b border-[#F4E4C8] text-xs font-semibold text-[#725447]">
              <span>Items:</span>
              <span className="text-[#8A3F18] font-bold">{submittedData.quantity} &times; {submittedData.itemName}</span>
            </div>
            {submittedData.notes && (
              <div className="pt-2.5 text-xs text-[#725447]">
                <span className="font-semibold">Note:</span> {submittedData.notes}
              </div>
            )}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.primaryPhone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#E86F24] hover:bg-[#321A12] text-white font-bold rounded-xl text-sm transition-colors shadow-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now to Confirm: {BUSINESS_INFO.primaryPhone}</span>
            </a>

            <button
              type="button"
              onClick={handleReset}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#FFF4DF] hover:bg-[#F4E4C8] text-[#321A12] font-bold rounded-xl text-sm border border-[#F4E4C8] transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
              <span>New Request</span>
            </button>
          </div>
        </div>
      ) : (
        /* Order Form */
        <form onSubmit={handleSubmit} noValidate>
          <div className="flex items-center gap-2.5 mb-6">
            <div className="w-9 h-9 rounded-xl bg-[#FFF4DF] border border-[#D99532]/40 flex items-center justify-center text-[#E86F24]">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold text-[#321A12]">
                Quick Order Inquiry
              </h3>
              <p className="text-xs text-[#725447]">
                Submit your order details or call directly for immediate pickup.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {/* Name */}
            <div>
              <label htmlFor="customer-name" className="block text-xs font-bold uppercase tracking-wider text-[#321A12] mb-1.5">
                Your Name <span className="text-[#B92E20]">*</span>
              </label>
              <input
                id="customer-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Tariq Khan"
                className={`w-full px-4 py-3 bg-white text-[#241712] border rounded-xl text-sm placeholder:text-[#725447]/60 focus:outline-none focus:ring-2 focus:ring-[#E86F24] transition-all ${
                  errors.name ? 'border-[#B92E20] bg-red-50/20' : 'border-[#F4E4C8]'
                }`}
              />
              {errors.name && (
                <p className="flex items-center gap-1 text-xs text-[#B92E20] mt-1 font-medium">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.name}</span>
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="customer-phone" className="block text-xs font-bold uppercase tracking-wider text-[#321A12] mb-1.5">
                Phone Number <span className="text-[#B92E20]">*</span>
              </label>
              <input
                id="customer-phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="e.g. 0311 1111111"
                className={`w-full px-4 py-3 bg-white text-[#241712] border rounded-xl text-sm placeholder:text-[#725447]/60 focus:outline-none focus:ring-2 focus:ring-[#E86F24] transition-all ${
                  errors.phone ? 'border-[#B92E20] bg-red-50/20' : 'border-[#F4E4C8]'
                }`}
              />
              {errors.phone && (
                <p className="flex items-center gap-1 text-xs text-[#B92E20] mt-1 font-medium">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.phone}</span>
                </p>
              )}
            </div>

            {/* Select Item & Quantity */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="sm:col-span-2">
                <label htmlFor="select-item" className="block text-xs font-bold uppercase tracking-wider text-[#321A12] mb-1.5">
                  Select Item <span className="text-[#B92E20]">*</span>
                </label>
                <select
                  id="select-item"
                  value={selectedItem}
                  onChange={(e) => setSelectedItem(e.target.value)}
                  className="w-full px-4 py-3 bg-white text-[#241712] border border-[#F4E4C8] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#E86F24] transition-all cursor-pointer font-medium"
                >
                  {MENU_ITEMS.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name} &bull; PKR {item.price}
                    </option>
                  ))}
                  <option value="custom-box">Custom Mixed Snacks Box</option>
                </select>
              </div>

              <div>
                <label htmlFor="select-quantity" className="block text-xs font-bold uppercase tracking-wider text-[#321A12] mb-1.5">
                  Quantity <span className="text-[#B92E20]">*</span>
                </label>
                <input
                  id="select-quantity"
                  type="number"
                  min="1"
                  max="200"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className={`w-full px-4 py-3 bg-white text-[#241712] border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#E86F24] transition-all ${
                    errors.quantity ? 'border-[#B92E20]' : 'border-[#F4E4C8]'
                  }`}
                />
              </div>
            </div>

            {/* Message / Notes */}
            <div>
              <label htmlFor="customer-notes" className="block text-xs font-bold uppercase tracking-wider text-[#321A12] mb-1.5">
                Special Notes (Optional)
              </label>
              <textarea
                id="customer-notes"
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="e.g. Extra spicy tamarind chutney, pack separately, or pickup at 4:30 PM"
                className="w-full px-4 py-2.5 bg-white text-[#241712] border border-[#F4E4C8] rounded-xl text-sm placeholder:text-[#725447]/60 focus:outline-none focus:ring-2 focus:ring-[#E86F24] transition-all resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              id="submit-order-inquiry-btn"
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-[#321A12] hover:bg-[#E86F24] text-[#FFF4DF] hover:text-white font-bold text-base rounded-xl shadow-md transition-all duration-200 cursor-pointer disabled:opacity-75 active:scale-98"
            >
              {isSubmitting ? (
                <>
                  <RefreshCw className="w-5 h-5 animate-spin" />
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 text-[#D99532]" />
                  <span>Send Order Request</span>
                </>
              )}
            </button>
          </div>

          {/* Urgent Note */}
          <div className="mt-5 p-3.5 rounded-xl bg-[#FFF4DF] border border-[#D99532]/40 text-center">
            <p className="text-xs font-medium text-[#725447]">
              For fastest service, call us directly at{' '}
              <a
                href={`tel:${BUSINESS_INFO.primaryPhone}`}
                className="font-bold text-[#E86F24] underline hover:text-[#321A12]"
              >
                {BUSINESS_INFO.primaryPhone}
              </a>
              .
            </p>
          </div>
        </form>
      )}
    </div>
  );
};
