// Patches Element.prototype with a getter that exposes
// getBoundingClientRect() as a JSON-readable property called
// `boundingClientRect`. Lets the Elm Tooltip package read the
// trigger element's screen-space rectangle inside a `mouseenter`
// event decoder, without a port round-trip.
//
// Originally from Hayleigh Thompson's Ellie:
// https://ellie-app.com/nZ6fwNC5bgha1
//
// Idempotent: skips if already installed. Safe under hot-reload, or
// when two packages each pull the same shim into the same page.
if (!("boundingClientRect" in Element.prototype)) {
  Object.defineProperty(Element.prototype, "boundingClientRect", {
    configurable: true,
    enumerable: true,
    get() {
      return this.getBoundingClientRect();
    },
  });
}
