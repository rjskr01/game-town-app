'use client';

const GameContainer = () => {

    const onGameResizeClick = () => {
        
    };

    const onGameCloseClick = () => {

    }

    return (
    <div id="gameContainer" className="hidden">
    <div className="flex w-full text-black text-[31px] font-['Arial']">
        <div className="flex-[9]">House Blackjack Tournament (NV)</div>
        <div  className='minmaxBtn flex-[0.3] pointer text-right' onClick={onGameResizeClick} id="maxIcon">&#128471;&#xFE0E;</div>
        <div  className='minmaxBtn flex-[0.3] pointer text-right' onClick={onGameCloseClick} id="closeIcon">&#128473;&#xFE0E;</div>
    </div>
    <div id="gameImgHolder" className="">
      
        <img id="gameImg" className="w-full ml-[1px] h-full" src="assets/images/game.jpg"/>
       
    </div>
</div>)
}

export default GameContainer;