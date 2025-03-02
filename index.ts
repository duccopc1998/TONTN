import {Address, TonClient} from '@ton/ton';
import {getHttpEndpoint} from '@orbs-network/ton-access';

async function main () {

  const wallet = Address.parse('0QBMGGoqRXpf8u5xzOylY7cR2z8wBK3doWRA-tDIKi61QfeL');
  const collection = Address.parse('EQDk8N7xM5D669LC2YACrseBJtDyFqwtSPCNhRWXU7kjEptX');

  const endpoint = await getHttpEndpoint({
    network: "testnet",
  });

  // previous code

  const miningData = await client.callGetMethod(collection, 'get_mining_data')

  console.log(miningData)

}

main()