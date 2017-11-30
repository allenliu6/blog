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
	return moment(time).fromNow()
}

export const formatDate = (time) => {
	return moment(parseInt(time)).format('YYYY-MM-DD HH:mm')
}