import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ShipmentDetails {
    weight: bigint;
    paymentType: Variant_cod_prepaid;
    dimensions?: string;
}
export interface Booking {
    bookingId: bigint;
    shipment: ShipmentDetails;
    sender: Address;
    senderPincodeCheck: PincodeCheckResult;
    receiverPincodeCheck: PincodeCheckResult;
    timestamp: bigint;
    receiver: Address;
}
export interface PincodeCheckResult {
    isServiceable: boolean;
    pincode: bigint;
}
export interface Address {
    city: string;
    fullName: string;
    mobileNumber: string;
    state: string;
    address: string;
    pincode: bigint;
}
export enum Variant_cod_prepaid {
    cod = "cod",
    prepaid = "prepaid"
}
export interface backendInterface {
    bookShipment(sender: Address, receiver: Address, shipment: ShipmentDetails): Promise<bigint>;
    getAllBookings(): Promise<Array<Booking>>;
    trackShipment(bookingId: bigint): Promise<Booking>;
}
