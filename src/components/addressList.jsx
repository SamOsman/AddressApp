// component
import Address from './Address'
//styles
import '../style/address.css'

function AddressList({ addressList }) {
    return (
        <>
            {addressList?.map((address, index) => (
                <Address address={address} index={index}/>
            ))}
        </>

    )
}

export default AddressList