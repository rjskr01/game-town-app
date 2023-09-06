import GameCategoryMenuNavigation from "./game-category-menu-navigation";
import GameListcontainer from "./game-list-container";

const GameCategory = () => {
    return (
        <div id="gameCategory" className="w-[90%] h-[calc(100vh-200px)] bg-white">
            <div id="gameCategoryMenu" className="flex flex-row font-[800] text-black p-[14px] text-[13px] font-[Arial] mt-[20px]">
                <div className="mr-[20px]">
                    GAME CATEGORIES:
                </div>
                <GameCategoryMenuNavigation/>
            </div>
            <GameListcontainer/>
        </div>
    )
}

export default GameCategory;