import Layout from '../components/Layout';
import Fetch from 'isomorphic-unfetch';
import Prices from '../components/Prices'

const Index = (props) => (
	 <Layout>
	 <div>	
	    <h1>Welcome to Bitzprice</h1>
	    <p>Check Current Bitcoin rate</p>
	    <Prices bpi={props.bpi}/>
	 </div>
	 </Layout>
	);

	Index.getInitialProps = async function() {
		const res = await fetch
		('https://api.coindesk.com/v1/bpi/currentprice.json');
		const data = await res.json();

		return {
			bpi: data.bpi
		}
	}

export default Index;