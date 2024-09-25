import React, {useState} from 'react'
import { Select, Typography, Row, Col, Avatar, Card } from 'antd'
import moment from 'moment/moment'

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'
import { useGetCryptosQuery } from '../services/cryptoApi'

const {Text, Title} = Typography
const {Option} = Select

const News = ({simplified}) => {

  const [newsCategory, setNewsCategory] = useState("Cryptocurrency")
  const {data: cryptoNews } = useGetCryptoNewsQuery(newsCategory)
  const { data } = useGetCryptosQuery(100)

  //console.log(cryptoNews)

  const demoImgUrl = "https://upload.wikimedia.org/wikipedia/commons/0/0b/Google_News_icon.png"

  if (!cryptoNews?.data) return "Loading.."

  const displayedNews = simplified
    ? cryptoNews?.data.slice(0, 6) // Show only 6 items if simplified is true
    : cryptoNews?.data.slice(0, 18);

  return (
    <Row gutter={[24, 24]}>
      {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            className='select-news'
            placeholder='Select a Crypto'
            optionFilterProp='children'
            onChange={(value)=> setNewsCategory(value)}
            filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          >
            <Option value="Cryptocurrency">Cryptocurrency</Option>
            {data?.data?.coins.map((coin) => <Option value={coin.name}>{coin.name}</Option>)}

          </Select>
        </Col>
      )}
      {displayedNews?.map((news, i) =>(
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className='news-card'>
            <a href={news.url} target='_blank' rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>{news.title}</Title>
                <img src={news?.thumbnail} alt="news iamge" />
              </div>
              <p>
                {news?.description > 100 ? `${news?.description.substring(0,100)}...` : news?.description}
              </p>
              <div className="provider-container">
                <div>
                  <Avatar src={news?.source?.favicon || demoImgUrl} alt=""/>
                  <Text className='provider-name'>{news?.source?.name}</Text>
                </div>
                <Text>{moment(news.createdAt).startOf('ss').fromNow()}</Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default News