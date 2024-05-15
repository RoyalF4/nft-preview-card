export default function App() {
  return (
    <main className="bg-main-bg  min-h-screen px-6 pt-16 text-white">
      <h1 className="sr-only">NFT Preview Card</h1>
      <div className="bg-card-bg mx-auto max-w-96 rounded-2xl p-6">
        <img
          className=" mb-8 rounded-xl"
          src="/images/image-equilibrium.jpg"
          alt=""
        />

        <h2 className="font-outfit-600 pb-4 text-2xl">Equilibrium #3429</h2>
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
            Creation of <span className="text-white">Jules Wyvern</span>
          </span>
        </div>
      </div>
    </main>
  );
}
