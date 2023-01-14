import alipay from "../assets/alipay.jpg";
import payme from "../assets/payme.jpg";

const Payment = () => {
  return (
    <section className="w-full h-screen">
      <div
        id="main"
        className="main-content w-full screen flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5"
      >
        <div className="bg-gray-800 pt-3">
          <div className="rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white">
            <h1 className="font-bold pl-2">Payment</h1>
          </div>
        </div>
        <div></div>
        <div className="w-full px-16 mx-auto mt-12">
          <h1 className="mb-2 text-xl font-bold text-gray-900 ">
            學費繳付方式:
          </h1>
          <ol className="max-w-md space-y-1 mb-6 text-gray-800 list-decimal list-inside">
            <li className="mt-12 w-100 mb-12 font-semibold">
              Pay Me
              <div className="flex justify-center align-middle mt-4  md:ml-32 rounded border border-red-300">
                <img src={payme} alt="payMe QR code" />
              </div>
            </li>
            <li className="mt-12 w-100 mb-12 font-semibold">
              Alipay
              <div className="flex justify-center align-middle mt-4  md:ml-32 rounded border border-blue-300">
                <img src={alipay} alt="payMe QR code" />
              </div>
            </li>
            <br />
            <li className="mt-24 w-100 mb-4 font-semibold">
              FPS / Bank Transfer
              <div className="flex flex-col mt-4  md:ml-32 rounded border bg-gray-50 border-green-300 p-3">
                <p className="font-bold w-100">FPS: +852 6352 0220</p>
                <p className="font-bold w-100 mt-2">
                  Bank Transfer: 394-470108-882
                </p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Payment;
