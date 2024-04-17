import React from "react";

const Map = () => {
  return (
    <div className="map-container">
      <iframe
        title="Google Map"
        width="100%"
        height="300"
        frameBorder="0"
        style={{ border: 0 }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387628.61252358174!2d-74.25987347523268!3d40.69767000586288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c250d08d35a4ad%3A0xeffd77173e6bac1d!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sca!4v1617228696895!5m2!1sen!2sca"
        allowFullScreen={true}
        aria-hidden="false"
        tabIndex={0}
      ></iframe>
    </div>
  );
};

export default Map;
