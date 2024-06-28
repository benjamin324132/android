import Air from "../_components/air";
import ChartWidget from "../_components/chartWidget";
import CheckoutWidget from "../_components/checkoutWidget";
import LevelWidget from "../_components/levelWidget";
import ListWidget from "../_components/listWidget";
import MusicPlayer from "../_components/musicPlayer";
import PaymentCard from "../_components/paymentCard";
import PaymentProcessing from "../_components/paymentProcessing";
import StatusWidget from "../_components/statusWidget";
import StockWidget from "../_components/stockWidget";
import VoteWidget from "../_components/voteWidget";
import Weather from "../_components/weather";
import WeekChart from "../_components/weekChart";


const Page = () => {
    return <div className=" max-w-screen-xl mx-auto p-4">
        
<div className="grid grid-cols-10 grid-rows-12 gap-4">
    <div className="col-span-3 row-span-3"><VoteWidget /></div>
    <div className="col-span-3 row-span-3 col-start-4"><PaymentProcessing /></div>
    <div className="col-span-4 row-span-3 col-start-7"><StockWidget /></div>
    <div className="col-span-4 row-span-3 row-start-4"><MusicPlayer /></div>
    <div className="col-span-3 row-span-3 col-start-5 row-start-4"><Air /></div>
    <div className="col-span-3 row-span-3 col-start-8 row-start-4 "><StatusWidget /></div>
    <div className="col-span-4 row-span-3 col-start-3 row-start-7"><Weather /></div>
    <div className="col-span-2 row-span-3 col-start-1 row-start-7"><StatusWidget /></div>
    <div className="col-span-4 row-span-3 col-start-7 row-start-7"><PaymentCard /></div>
    <div className="col-span-3 row-span-3 row-start-10"><WeekChart /></div>
    <div className="col-span-3 row-span-3 col-start-8 row-start-10"><ChartWidget /></div>
    <div className="col-span-4 row-span-3 col-start-4 row-start-10"><ListWidget /></div>
</div>
    
    </div>
}

export default Page;