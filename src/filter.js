import moment from 'moment'

export const transTab = (tab) => {
    switch (tab) {
        case 'network':
            return '计算机网络'
        
        case 'interview':
            return '面经'
        
        case 'frame':
            return '框架'

        case 'computer':
            return '计算机基础'

        case 'life':
            return '爱生活'

        default: return 'JavaScript'
    }
}

export const timeToNow = (time) => {
	const t = parseFloat(new Date - new Date(time)) / 1000;
	let str;
	if (t) {
		if (t > 60 && t < 3600) {
			str = `${parseInt(t / 60.0, 10)}分钟前`;
		} else if (t >= 3600 && t < 86400) {
			str = `${parseInt(t / 3600.0, 10)}小时前`;
		} else if (t >= 86400 && t < 86400 * 30) {
			str = `${parseInt(t / 86400.0, 10)}天前`;
		} else if (t >= 86400 * 30 && t < 86400 * 365) {
			str = `${parseInt(t / (86400.0 * 30), 10)}个月前`;
		} else if (t >= 86400 * 365) {
			str = `${parseInt(t / (86400.0 * 365), 10)}年前`;
		} else {
			str = `${parseInt(t, 10)}秒前`;
		}
	}
	return str;
}

export const formatDate = (time) => {
	return moment(time).format('YYYY-MM-DD HH:mm')
}