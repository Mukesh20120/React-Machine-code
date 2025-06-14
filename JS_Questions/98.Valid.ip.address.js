function isValidIP(str) {
  if (str.includes(':')) {
    // IPv6
    const ipv6 = str.split(':');
    if (ipv6.length !== 8) return false;
    return ipv6.every(ip => /^[0-9a-fA-F]{1,4}$/.test(ip));
  } else if (str.includes('.')) {
    // IPv4
    const ipv4 = str.split('.');
    if (ipv4.length !== 4) return false;
    return ipv4.every(ip => {
      if (ip === '' || (ip.length > 1 && ip.startsWith('0'))) return false;
      if (!/^\d+$/.test(ip)) return false;
      const num = Number(ip);
      return num >= 0 && num <= 255;
    });
  }
  return false;
}



function isValidIP(str) {
  if (str.includes(':')) {
    // IPv6
    const ipv6 = str.split(':');
    if (ipv6.length !== 8) return false;
    return ipv6.every(ip => /^[0-9a-fA-F]{1,4}$/.test(ip));
  } else if (str.includes('.')) {
    // IPv4
    const ipv4 = str.split('.');
    if (ipv4.length !== 4) return false;
    return ipv4.every(ip => {
      let nIp = +ip;
      if(isNaN(nIp) || nIp.toString()!==ip || nIp>255)return false
      return true;
    });
  }
  return false;
}
