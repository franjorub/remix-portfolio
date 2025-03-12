import type { MetaFunction } from '@remix-run/cloudflare';
import { GithubOutlined, MailOutlined, LinkedinOutlined } from '@ant-design/icons';
import { Typography, Button, Space, Flex, Tag, Image, theme, Row, Col } from 'antd';

const { Title, Text } = Typography;

export const meta: MetaFunction = () => {
  return [
    { title: 'Francisco Rubial | Front-End Developer Portfolio' },
    {
      name: 'description',
      content:
        'Front-end developer specialized in React, TypeScript, and modern web development. Creating responsive, user-friendly web applications with a focus on performance and accessibility.',
    },
    {
      name: 'keywords',
      content:
        'Francisco Rubial, Front-End Developer, React, TypeScript, Web Development, JavaScript, Portfolio',
    },
    {
      property: 'og:title',
      content: 'Francisco Rubial - Front-End Developer Portfolio',
    },
    {
      property: 'og:description',
      content:
        'Front-end developer specialized in React, TypeScript, and modern web development. Creating responsive, user-friendly web applications with a focus on performance and accessibility.',
    },
    {
      name: 'robots',
      content: 'index, follow',
    },
    {
      name: 'author',
      content: 'Francisco Rubial',
    },
  ];
};

export default function Index() {
  const {
    token: { borderRadiusLG, paddingXL },
  } = theme.useToken();

  return (
    <Flex justify={'center'}>
      <div style={{ maxWidth: 1440, paddingBottom: paddingXL }}>
        <Space direction={'vertical'} size={'large'}>
          {/* ----------------------------------------------------*/}
          <Space direction="vertical" id="hero" size="middle">
            <Title level={1}>Hello, I am Francisco Rubial</Title>
            <Text type="secondary">
              I build <Text strong>scalable</Text> frontend architectures with{' '}
              <Text strong>thoughtful</Text> user experiences.
            </Text>

            <Flex>
              <Space direction="horizontal">
                <Button variant="solid" color="purple" href={'/#contact'}>
                  Get in touch
                </Button>
                <Button
                  variant={'link'}
                  href={'https://linkedin.com/in/franjorub'}
                  target={'_blank'}
                  icon={<LinkedinOutlined />}
                >
                  View resume
                </Button>
              </Space>
            </Flex>
          </Space>
          {/* ----------------------------------------------------*/}

          {/* ----------------------------------------------------*/}
          <Space direction={'vertical'}>
            <Title level={2}>About me</Title>
            <Row gutter={[16, 24]}>
              <Col md={12} xs={24}>
                <Space direction={'vertical'} size={'large'}>
                  <Space direction={'vertical'}>
                    <Text>
                      I&#39;m a seasoned developer with a passion for creating intuitive and
                      engaging digital experiences. With extensive experience in both design and
                      frontend architecture, I bring a comprehensive perspective to every project.
                      My expertise spans building robust frontend foundations, implementing
                      efficient caching strategies, establishing clear domain architectures, and
                      leveraging module federation for scalable applications. This blend of
                      technical depth and design sensibility allows me to deliver solutions that are
                      not only visually appealing but also technically sophisticated and
                      maintainable.
                    </Text>
                    <Text type={'secondary'}>
                      When I&#39;m not coding, you&#39;ll find me traveling, experimenting with new
                      recipes, or getting lost in a nordic crime series.
                    </Text>
                  </Space>
                </Space>
              </Col>
              <Col md={12} xs={24}>
                <Image
                  width={200}
                  height={200}
                  style={{ borderRadius: borderRadiusLG }}
                  preview={false}
                  fallback="data:image/png;base64,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"
                  src={'/images/francisco-rubial.jpg'}
                />
              </Col>
            </Row>
          </Space>
          {/* ----------------------------------------------------*/}

          {/* ----------------------------------------------------*/}
          <Space direction={'vertical'}>
            <Title level={2}>What I work with</Title>
            <Row gutter={[0, 16]}>
              <Col>
                <Tag color={'magenta'}>JavaScript</Tag>
              </Col>
              <Col>
                <Tag color={'purple'}>TypeScript</Tag>
              </Col>
              <Col>
                <Tag color={'blue'}>Rect</Tag>
              </Col>
              <Col>
                <Tag color={'cyan'}>Next.js</Tag>
              </Col>
              <Col>
                <Tag color={'default'}>Node.js</Tag>
              </Col>
              <Col>
                <Tag color={'gold'}>CSS</Tag>
              </Col>
              <Col>
                <Tag color={'geekblue'}>Tailwind</Tag>
              </Col>
              <Col>
                <Tag color={'lime'}>REST APIs</Tag>
              </Col>
              <Col>
                <Tag color={'error'}>GraphQL</Tag>
              </Col>
              <Col>
                <Tag color={'volcano'}>Responsive Design</Tag>
              </Col>
              <Col>
                <Tag color={'processing'}>React Native</Tag>
              </Col>
            </Row>
          </Space>
          {/* ----------------------------------------------------*/}

          {/* ----------------------------------------------------*/}
          <Space direction={'vertical'} size={'large'} id={'contact'}>
            <Space direction={'vertical'}>
              <Title level={2}>Get in touch</Title>
              <Text>Have a project in mind or just want to chat? Feel free to reach out.</Text>
            </Space>
            <Space direction={'vertical'}>
              <Button
                variant={'solid'}
                color={'purple'}
                href={'mailto:franjorub@gmail.com'}
                icon={<MailOutlined />}
              >
                franjorub@gmail.com
              </Button>
              <Button
                variant={'link'}
                href={'https://github.com/franjorub'}
                icon={<GithubOutlined />}
              >
                Github.com/franjorub
              </Button>
            </Space>
          </Space>
        </Space>
      </div>
    </Flex>
  );
}
