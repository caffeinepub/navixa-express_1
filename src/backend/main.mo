import Nat "mo:core/Nat";
import Map "mo:core/Map";
import Text "mo:core/Text";
import Time "mo:core/Time";
import Runtime "mo:core/Runtime";
import Iter "mo:core/Iter";
import Order "mo:core/Order";
import Array "mo:core/Array";

actor {
  type Address = {
    fullName : Text;
    mobileNumber : Text;
    address : Text;
    city : Text;
    state : Text;
    pincode : Nat;
  };

  type PincodeCheckResult = {
    pincode : Nat;
    isServiceable : Bool;
  };

  type ShipmentDetails = {
    weight : Nat;
    dimensions : ?Text;
    paymentType : {
      #prepaid;
      #cod;
    };
  };

  type Booking = {
    bookingId : Nat;
    sender : Address;
    receiver : Address;
    shipment : ShipmentDetails;
    senderPincodeCheck : PincodeCheckResult;
    receiverPincodeCheck : PincodeCheckResult;
    timestamp : Int;
  };

  module Booking {
    public func compare(b1 : Booking, b2 : Booking) : Order.Order {
      Nat.compare(b1.bookingId, b2.bookingId);
    };
  };

  var nextBookingId = 1;
  let bookings = Map.empty<Nat, Booking>();

  public shared ({ caller }) func bookShipment(
    sender : Address,
    receiver : Address,
    shipment : ShipmentDetails
  ) : async Nat {
    let senderPincodeCheck = {
      pincode = sender.pincode;
      isServiceable = true;
    };

    let receiverPincodeCheck = {
      pincode = receiver.pincode;
      isServiceable = true;
    };

    let bookingId = nextBookingId;
    nextBookingId += 1;

    let newBooking : Booking = {
      bookingId;
      sender;
      receiver;
      shipment;
      senderPincodeCheck;
      receiverPincodeCheck;
      timestamp = Time.now();
    };

    bookings.add(bookingId, newBooking);
    bookingId;
  };

  public query ({ caller }) func trackShipment(bookingId : Nat) : async Booking {
    switch (bookings.get(bookingId)) {
      case (null) { Runtime.trap("Booking not found") };
      case (?booking) { booking };
    };
  };

  public query ({ caller }) func getAllBookings() : async [Booking] {
    bookings.values().toArray().sort();
  };
};
