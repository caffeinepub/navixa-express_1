import { useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Loader2, Package } from 'lucide-react';
import { useBookingForm } from '../hooks/useBookingForm';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const {
    formData,
    updateField,
    isSubmitting,
    isSuccess,
    error,
    bookingId,
    submitBooking,
    resetForm
  } = useBookingForm();

  useEffect(() => {
    if (isSuccess && bookingId) {
      // Immediately redirect to WhatsApp
      const message = encodeURIComponent('Hello Navixa Express, I want to book a shipment. My booking details are submitted on the website.');
      window.open(`https://wa.me/918530661581?text=${message}`, '_blank');
      
      // Close the modal immediately
      handleClose();
    }
  }, [isSuccess, bookingId]);

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitBooking();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-blue-900 flex items-center gap-2">
            <Package className="h-6 w-6 text-orange-500" />
            Book Your Shipment
          </DialogTitle>
          <DialogDescription>
            Fill in the details below to book your shipment. All fields are required unless marked optional.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          {/* Sender Details */}
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <h3 className="text-lg font-semibold text-blue-900 mb-4">Sender Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="senderName">Full Name *</Label>
                <Input
                  id="senderName"
                  value={formData.sender.fullName}
                  onChange={(e) => updateField('sender', 'fullName', e.target.value)}
                  required
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="senderMobile">Mobile Number *</Label>
                <Input
                  id="senderMobile"
                  type="tel"
                  value={formData.sender.mobileNumber}
                  onChange={(e) => updateField('sender', 'mobileNumber', e.target.value)}
                  required
                  className="mt-1"
                />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="senderAddress">Pickup Address *</Label>
                <Input
                  id="senderAddress"
                  value={formData.sender.address}
                  onChange={(e) => updateField('sender', 'address', e.target.value)}
                  required
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="senderCity">City *</Label>
                <Input
                  id="senderCity"
                  value={formData.sender.city}
                  onChange={(e) => updateField('sender', 'city', e.target.value)}
                  required
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="senderState">State *</Label>
                <Input
                  id="senderState"
                  value={formData.sender.state}
                  onChange={(e) => updateField('sender', 'state', e.target.value)}
                  required
                  className="mt-1"
                />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="senderPincode">Pincode *</Label>
                <Input
                  id="senderPincode"
                  type="text"
                  value={formData.sender.pincode}
                  onChange={(e) => updateField('sender', 'pincode', e.target.value)}
                  required
                  pattern="[0-9]{6}"
                  title="Please enter a valid 6-digit pincode"
                  className="mt-1"
                />
              </div>
            </div>
          </div>

          {/* Receiver Details */}
          <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
            <h3 className="text-lg font-semibold text-orange-900 mb-4">Receiver Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="receiverName">Full Name *</Label>
                <Input
                  id="receiverName"
                  value={formData.receiver.fullName}
                  onChange={(e) => updateField('receiver', 'fullName', e.target.value)}
                  required
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="receiverMobile">Mobile Number *</Label>
                <Input
                  id="receiverMobile"
                  type="tel"
                  value={formData.receiver.mobileNumber}
                  onChange={(e) => updateField('receiver', 'mobileNumber', e.target.value)}
                  required
                  className="mt-1"
                />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="receiverAddress">Delivery Address *</Label>
                <Input
                  id="receiverAddress"
                  value={formData.receiver.address}
                  onChange={(e) => updateField('receiver', 'address', e.target.value)}
                  required
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="receiverCity">City *</Label>
                <Input
                  id="receiverCity"
                  value={formData.receiver.city}
                  onChange={(e) => updateField('receiver', 'city', e.target.value)}
                  required
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="receiverState">State *</Label>
                <Input
                  id="receiverState"
                  value={formData.receiver.state}
                  onChange={(e) => updateField('receiver', 'state', e.target.value)}
                  required
                  className="mt-1"
                />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="receiverPincode">Pincode *</Label>
                <Input
                  id="receiverPincode"
                  type="text"
                  value={formData.receiver.pincode}
                  onChange={(e) => updateField('receiver', 'pincode', e.target.value)}
                  required
                  pattern="[0-9]{6}"
                  title="Please enter a valid 6-digit pincode"
                  className="mt-1"
                />
              </div>
            </div>
          </div>

          {/* Shipment Details */}
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Shipment Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="weight">Package Weight (kg) *</Label>
                <Input
                  id="weight"
                  type="number"
                  value={formData.shipment.weight}
                  onChange={(e) => updateField('shipment', 'weight', e.target.value)}
                  required
                  min="0"
                  step="0.1"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="dimensions">Dimensions (optional)</Label>
                <Input
                  id="dimensions"
                  value={formData.shipment.dimensions}
                  onChange={(e) => updateField('shipment', 'dimensions', e.target.value)}
                  placeholder="e.g., 10x10x10 cm"
                  className="mt-1"
                />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="paymentType">Payment Type *</Label>
                <Select
                  value={formData.shipment.paymentType}
                  onValueChange={(value) => updateField('shipment', 'paymentType', value)}
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select payment type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="prepaid">Prepaid</SelectItem>
                    <SelectItem value="cod">Cash on Delivery (COD)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}

          <div className="flex gap-3 justify-end">
            <Button type="button" variant="outline" onClick={handleClose}>
              Cancel
            </Button>
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="bg-orange-500 hover:bg-orange-600"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                'Submit Booking'
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
