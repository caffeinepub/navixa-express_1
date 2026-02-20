import { useState } from 'react';
import { useActor } from './useActor';
import type { Booking } from '../backend';

export function useTrackShipment() {
  const { actor } = useActor();
  const [trackingData, setTrackingData] = useState<Booking | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const trackShipment = async (bookingId: number) => {
    if (!actor) {
      setError('Backend connection not available');
      return;
    }

    setIsLoading(true);
    setError(null);
    setTrackingData(null);

    try {
      const data = await actor.trackShipment(BigInt(bookingId));
      setTrackingData(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Booking not found. Please check your booking ID.');
    } finally {
      setIsLoading(false);
    }
  };

  const reset = () => {
    setTrackingData(null);
    setError(null);
    setIsLoading(false);
  };

  return {
    trackingData,
    isLoading,
    error,
    trackShipment,
    reset,
  };
}
