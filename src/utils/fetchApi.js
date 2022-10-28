export default async function getapi(setLoading, setCounts) {
  const response = await fetch("https://api.npoint.io/97d89162575a9d816661");
  const data = await response.json();
  
  setCounts(data.cuentas);
  if (response) setLoading(true);
}
