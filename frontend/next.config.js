const path = require('path');
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
	const config = {
		reactStrictMode: true,
		sassOptions: {
			includePaths: [path.join(__dirname, 'styles')],
		}
	}

	if (phase === PHASE_DEVELOPMENT_SERVER) {
		config.rewrites = async () => {
			return [
				{
					source: '/api/:path*',
					destination: 'http://localhost:8080/api/:path*'
				}
			]
		}
	}

	return config;
}
