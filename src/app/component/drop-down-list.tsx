import stateItems from "../data/state-items";

type DropDownListProps = {
    selectedItem?: string
} 

const DropDownList: React.FC<DropDownListProps> = ({selectedItem = "NV"}) => {
    return (
        <select className="border-none padding-[0.75rem] appearance-none text-[20px] stateDrpDown">
            {
                stateItems.map((item, index) => {
                    return (
                        <option key={index} value={item.key} selected={item.key === selectedItem}>{item.value}</option>
                    )
                })
            }
        </select>
    )   
}

export default DropDownList;