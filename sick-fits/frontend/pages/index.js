import Items from '../components/Items';

const index = (props) => (
    <div>
        <Items page={parseFloat(props.query.page) || 1} />
    </div>

);

export default index;
