import { useState } from 'react';
import { useActor } from './useActor';
import { Variant_cod_prepaid } from '../backend';
import type { Address, ShipmentDetails } from '../backend';

interface FormData {
  sender: {
    fullName: string;
    mobileNumber: string;
    address: string;
    city: string;
    state: string;
    pincode: string;
  };
  receiver: {
    fullName: string;
    mobileNumber: string;
    address: string;
    city: string;
    state: string;
    pincode: string;
  };
  shipment: {
    weight: string;
    dimensions: string;
    paymentType: string;
  };
}

export function useBookingForm() {
  const { actor } = useActor();
  const [formData, setFormData] = useState<FormData>({
    sender: {
      fullName: '',
      mobileNumber: '',
      address: '',
      city: '',
      state: '',
      pincode: '',
    },
    receiver: {
      fullName: '',
      mobileNumber: '',
      address: '',
      city: '',
      state: '',
      pincode: '',
    },
    shipment: {
      weight: '',
      dimensions: '',
      paymentType: 'prepaid',
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [bookingId, setBookingId] = useState<number | null>(null);

  const updateField = (section: keyof FormData, field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const submitBooking = async () => {
    if (!actor) {
      setError('Backend connection not available');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const sender: Address = {
        fullName: formData.sender.fullName,
        mobileNumber: formData.sender.mobileNumber,
        address: formData.sender.address,
        city: formData.sender.city,
        state: formData.sender.state,
        pincode: BigInt(formData.sender.pincode),
      };

      const receiver: Address = {
        fullName: formData.receiver.fullName,
        mobileNumber: formData.receiver.mobileNumber,
        address: formData.receiver.address,
        city: formData.receiver.city,
        state: formData.receiver.state,
        pincode: BigInt(formData.receiver.pincode),
      };

      const paymentType: Variant_cod_prepaid = formData.shipment.paymentType === 'cod' 
        ? Variant_cod_prepaid.cod 
        : Variant_cod_prepaid.prepaid;

      const shipment: ShipmentDetails = {
        weight: BigInt(Math.round(parseFloat(formData.shipment.weight) * 10)),
        dimensions: formData.shipment.dimensions || undefined,
        paymentType: paymentType,
      };

      const id = await actor.bookShipment(sender, receiver, shipment);
      setBookingId(Number(id));
      setIsSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit booking');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      sender: {
        fullName: '',
        mobileNumber: '',
        address: '',
        city: '',
        state: '',
        pincode: '',
      },
      receiver: {
        fullName: '',
        mobileNumber: '',
        address: '',
        city: '',
        state: '',
        pincode: '',
      },
      shipment: {
        weight: '',
        dimensions: '',
        paymentType: 'prepaid',
      },
    });
    setIsSubmitting(false);
    setIsSuccess(false);
    setError(null);
    setBookingId(null);
  };

  return {
    formData,
    updateField,
    isSubmitting,
    isSuccess,
    error,
    bookingId,
    submitBooking,
    resetForm,
  };
}
