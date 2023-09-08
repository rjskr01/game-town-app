import {videoPokerItems , videoEZPokerItems, oneOnOnePokerItems} from "../data/game-items";
import GameList from "./game-list";

const GameListcontainer = () => {

    const handleClick = () => {
        
    }

    return (

        <div id="gameListContainer" className="flex flex-row my-[40px] mx-[20px]">
                    <div className="flex-1 text-black font-['Arial'] text-[20px]">
                        <div className="flex items-center">
                            <img src="assets/images/jack-trans.png" className="w-[50px]"/>
                            <div className="text-[red] font-extrabold">HOUSE GAMES</div>
                        </div>
                        <GameList items={videoPokerItems} title="Video Poker"/>
                        <GameList items={videoEZPokerItems} title="Video Poker"/>
                        <GameList items={oneOnOnePokerItems} title="Video Poker"/>
                    </div>
                    <div className="flex flex-1 justify-center flex-row flex-wrap gameListCls gameListImgCls">
                        <img  src="assets/images/games/minitex.png" />
                        <img  src="assets/images/games/doubleshot.png" />
                        <img  src="assets/images/games/texround.png" />
                        <img  src="assets/images/games/headsup.png" />
                        <img  src="assets/images/games/xtraplay.png" />
                    </div>
        </div>
    )
}

export default GameListcontainer;