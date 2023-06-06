export default function DonorBox({ amount }) {
  // console.log(amount + " $$$");
  return (
    <div>
      <script
        src="https://donorbox.org/widget.js"
        paypalExpress="false"
      ></script>
      <iframe
        src={`https://donorbox.org/embed/support-great-priest?default_interval=o&cy=EUR&amount=${amount}`}
        name="donorbox"
        allowpaymentrequest="allowpaymentrequest"
        seamless="seamless"
        frameborder="0"
        scrolling="no"
        height="900px"
        width="100%"
        style={{
          maxWidth: "500px",
          minWidth: "310px",
          maxHeight: "none!important",
        }}
        title="DonorBox"
      ></iframe>
    </div>
  );
}
