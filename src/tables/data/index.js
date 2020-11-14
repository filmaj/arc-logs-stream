// learn more about DynamoDB table stream functions here: https://arc.codes/primitives/tables
exports.handler = async function table (event) {
  console.log('table stream event:', JSON.stringify(event, null, 2))
  return
}
