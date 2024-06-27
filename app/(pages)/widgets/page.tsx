import AdRevenueWidget from "./_components/adRevenueWidget";
import Air from "./_components/air";
import  CalendarWidget  from "./_components/calendarWidget";
import ChartWidget from "./_components/chartWidget";
import CheckoutWidget from "./_components/checkoutWidget";
import ContactUser from "./_components/contactUser";
import LevelWidget from "./_components/levelWidget";
import ListWidget from "./_components/listWidget";
import MusicPlayer from "./_components/musicPlayer";
import PaymentCard from "./_components/paymentCard";
import PaymentMethod from "./_components/paymentMethod";
import PaymentProcessing from "./_components/paymentProcessing";
import PricingWidget from "./_components/pricingWidget";
import StockWidget from "./_components/stockWidget";
import VoteWidget from "./_components/voteWidget";
import Weather from "./_components/weather";

const Page = () => {
  return (
    <div className="max-w-[450px] mx-auto flex flex-col py-12 gap-8 px-2">
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
      <PaymentProcessing />
      <PaymentCard />
      <AdRevenueWidget />
      <ContactUser />
      <StockWidget />
      <ChartWidget />
    </div>
  );
};

export default Page;
