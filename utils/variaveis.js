const config = JSON.parse(open('./config/config.local.json'));
export function pegarBaseUrl(){
    const baseUrl = __ENV.BASE_URL || config.BASE_URL;
    return baseUrl;
}