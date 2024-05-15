// TODO: make img into a button, change hover effect to

export default function App() {
  return (
    <main className="bg-main-bg  min-h-screen px-6 pt-16 text-white">
      <h1 className="sr-only">NFT Preview Card</h1>
      <div className="bg-card-bg mx-auto max-w-96 rounded-2xl p-6">
        <div className="relative">
          <a className="before:bg-overlay cursor-pointer before:absolute before:flex before:h-full before:w-full before:items-center before:justify-center before:rounded-xl before:opacity-0 before:transition-opacity before:content-[url(/images/icon-view.svg)] before:hover:opacity-100">
            <img
              className=" mb-8 rounded-xl "
              src="/images/image-equilibrium.jpg"
              alt=""
            />
          </a>
        </div>

        <a className="hover:text-cyan font-outfit-600 mb-4 block cursor-pointer text-2xl">
          Equilibrium #3429
        </a>
        <p className="text-soft-blue text-m pb-6">
          Our Equilibrium collection promotes balance and calm.
        </p>
        <div className="flex items-center">
          <img className="h-5 pr-2" src="/images/icon-ethereum.svg" alt="" />
          <span className="text-cyan font-outfit-600 grow">0.041 ETH</span>
          <img className="h-5 pr-2" src="/images/icon-clock.svg" alt="" />
          <span className="text-soft-blue">3 days left</span>
        </div>
        <div className="border-soft-blue my-4 border-b border-opacity-30"></div>
        <div className=" flex items-center">
          <img
            className="mr-4 h-10 rounded-full border"
            src="/images/image-avatar.png"
            alt="Jules Wyvern avatar"
          />
          <span className="text-soft-blue">
            Creation of{" "}
            <a className="hover:text-cyan cursor-pointer text-white">
              Jules Wyvern
            </a>
          </span>
        </div>
      </div>
    </main>
  );
}
