import Air from "./_components/air";
import  CalendarWidget  from "./_components/calendarWidget";
import CheckoutWidget from "./_components/checkoutWidget";
import LevelWidget from "./_components/levelWidget";
import ListWidget from "./_components/listWidget";
import MusicPlayer from "./_components/musicPlayer";
import PaymentMethod from "./_components/paymentMethod";
import PricingWidget from "./_components/pricingWidget";
import VoteWidget from "./_components/voteWidget";
import Weather from "./_components/weather";

const Page = () => {
  return (
    <div className=" max-w-[450px] mx-auto flex flex-col py-12 gap-8 px-2">
      <MusicPlayer />
      <Air />
      <Weather />
      <CalendarWidget />
      <VoteWidget />
      <ListWidget />
      <LevelWidget />
      <CheckoutWidget />
      <PricingWidget />
      <PaymentMethod />

    </div>
  );
};

export default Page;
