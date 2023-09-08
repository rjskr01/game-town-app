'use client'

import DropDownList from "./drop-down-list";

const TournamentContainer = () => {
    const onEventTitleClick = () => {

    }
    return (
        <section className="trnmntaddSectionCls mt-[20px] flex-[40%]">
        <div id="dynamicHolder" className="">
            <div className="absolute left-[60.1%] top-[49px]">
                <img id="dynamicImg" className="w-[40px] align-middle" src="assets/images/logo-trans.png" />
            </div>
            <div id="dynamicHeader" className="bg-white text-[black] text-[30px] w-[90%] text-center h-[37px] leading-[37px] font-['Boulder-Regular'] font-boulder">
                600 Free Jacks Daily = 60 Minutes of Play
            </div>
        </div>
        <div id="trmntLstHdr" className="mt-[60px] text-[30px] w-[55%] text-center font-['Arial, Helvetica, sans-serif']">TOURNAMENT LISTING</div>
        <div id='trnmtLstnHolder' className="w-[90%] flex bg-white h-[calc(100vh-200px)] mt-[30px] text-[black]">
            <div id="trnmtdtsHdr" className="flex-[2]">
                <div className="w-full m-auto text-center mt-[20px]">
                    <DropDownList/>
                </div>
                <div className="flex justify-around font-bold text-[20px] font-['Arial']">
                    <a id="houseEvent" onClick={onEventTitleClick} href="#">HOUSE EVENTS</a> 
                    <a id ="clubEvent" onClick={onEventTitleClick} href="#">CLUB EVENTS</a>
                </div>
                <div className="dateHolder margin20 font-Arial fontSize20">
                    <div id="trmntDate"></div>
                </div>
                <table className="trnamentTble textAlignCentre font-Arial fontSize20">
                    <tr>
                      <th>BlackJack Daily/Weekly</th>
                      <th>Details</th>
                    </tr>
                    <tr>
                      <td>Tournament1</td>
                      <td>16</td>
                    </tr>
                    <tr>
                      <td>Tournament2</td>
                      <td>14</td>
                    </tr>
                  </table>
            </div>
            <div id="adsHolder" className="adsHolder">

            </div>
        </div>
    </section>
    )
}

export default TournamentContainer;