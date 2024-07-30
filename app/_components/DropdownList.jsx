import DropdownItem from "./DropdownItem"

const DropdownList = ({listData}) => {
    return (
        <div className="space-y-4">
            {
                listData.map((item) => (
                    <DropdownItem key={item.title} title={item.title} content={item.content} />
                ))
            }
        </div>
    )
}

export default DropdownList