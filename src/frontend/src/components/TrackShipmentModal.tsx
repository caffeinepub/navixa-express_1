import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2, Package, MapPin, User, Phone, Calendar } from 'lucide-react';
import { useTrackShipment } from '../hooks/useTrackShipment';

interface TrackShipmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TrackShipmentModal({ isOpen, onClose }: TrackShipmentModalProps) {
  const [bookingId, setBookingId] = useState('');
  const { trackingData, isLoading, error, trackShipment, reset } = useTrackShipment();

  const handleClose = () => {
    setBookingId('');
    reset();
    onClose();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (bookingId) {
      trackShipment(parseInt(bookingId));
    }
  };

  const formatDate = (timestamp: bigint) => {
    const date = new Date(Number(timestamp) / 1000000);
    return date.toLocaleString('en-IN', {
      dateStyle: 'medium',
      timeStyle: 'short'
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-blue-900 flex items-center gap-2">
            <Package className="h-6 w-6 text-orange-500" />
            Track Your Shipment
          </DialogTitle>
          <DialogDescription>
            Enter your booking ID to track your shipment status
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <Label htmlFor="bookingId">Booking ID</Label>
            <div className="flex gap-2 mt-1">
              <Input
                id="bookingId"
                type="number"
                value={bookingId}
                onChange={(e) => setBookingId(e.target.value)}
                placeholder="Enter your booking ID"
                required
              />
              <Button 
                type="submit" 
                disabled={isLoading || !bookingId}
                className="bg-blue-600 hover:bg-blue-700"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Tracking...
                  </>
                ) : (
                  'Track'
                )}
              </Button>
            </div>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}

          {trackingData && (
            <div className="space-y-6 mt-6">
              <div className="bg-gradient-to-br from-blue-50 to-orange-50 p-6 rounded-xl border-2 border-blue-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">Booking #{trackingData.bookingId.toString()}</h3>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    Confirmed
                  </span>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Calendar className="h-4 w-4" />
                  <span>Booked on: {formatDate(trackingData.timestamp)}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Sender Details */}
                <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Pickup Details
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <User className="h-4 w-4 text-gray-500 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">{trackingData.sender.fullName}</p>
                        <p className="text-gray-600">{trackingData.sender.address}</p>
                        <p className="text-gray-600">{trackingData.sender.city}, {trackingData.sender.state} - {trackingData.sender.pincode.toString()}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-gray-500" />
                      <p className="text-gray-700">{trackingData.sender.mobileNumber}</p>
                    </div>
                  </div>
                </div>

                {/* Receiver Details */}
                <div className="bg-orange-50 p-5 rounded-lg border border-orange-200">
                  <h4 className="font-semibold text-orange-900 mb-3 flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Delivery Details
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <User className="h-4 w-4 text-gray-500 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">{trackingData.receiver.fullName}</p>
                        <p className="text-gray-600">{trackingData.receiver.address}</p>
                        <p className="text-gray-600">{trackingData.receiver.city}, {trackingData.receiver.state} - {trackingData.receiver.pincode.toString()}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-gray-500" />
                      <p className="text-gray-700">{trackingData.receiver.mobileNumber}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Shipment Details */}
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Package className="h-5 w-5" />
                  Shipment Information
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500">Weight</p>
                    <p className="font-medium text-gray-900">{trackingData.shipment.weight.toString()} kg</p>
                  </div>
                  {trackingData.shipment.dimensions && (
                    <div>
                      <p className="text-gray-500">Dimensions</p>
                      <p className="font-medium text-gray-900">{trackingData.shipment.dimensions}</p>
                    </div>
                  )}
                  <div>
                    <p className="text-gray-500">Payment Type</p>
                    <p className="font-medium text-gray-900 capitalize">
                      {trackingData.shipment.paymentType === 'cod' ? 'Cash on Delivery' : 'Prepaid'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> For detailed tracking updates, please contact us on WhatsApp at{' '}
                  <a href="https://wa.me/918530661581" className="text-blue-600 hover:underline font-medium">
                    8530661581
                  </a>
                </p>
              </div>
            </div>
          )}
        </form>

        <div className="flex justify-end mt-4">
          <Button variant="outline" onClick={handleClose}>
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
