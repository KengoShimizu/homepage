import React, { Component } from 'react';
import ombuki from './img/ombuki.jpg';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import grapaper from './paper/grad-thesis.pdf';
import sci from './paper/sci.pdf';
import VRPTW from './paper/VRPTW.pdf';
import ant_colony from './paper/ant_colony.pdf';
import pso_aco from './paper/pso_aco.pdf';

const styles = {
  anchor: {
    fontWeight: 'bold',
    textDecoration: 'none',
    color: '#ffa500',
    fontFamily: 'serif', 
  },
  img: {
  	minWidth: '300px',
    width: '30%',
  },
};

function createData1(title, content) {
  return { title, content };
}
function createData2(url, title) {
  return { url, title };
}

const contents = [
  createData1('日本での研究内容', '神戸大学大学院にて<a href="http://www.al.cs.kobe-u.ac.jp/" target="_blank" rel="noopener noreferrer" style="font-weight: bold; text-decoration: none; color: #ffa500; font-family: serif;">玉置研究室</a>所属。近年自然災害によるエネルギー供給の低下が問題視され，その対応策として分散型のエネルギーグリッドがある。また，民生部門での一次エネルギー消費の3-4割が空調に使用されていることから，一次エネルギー消費の削減の期待，建物間熱融通によるエネルギー供給の柔軟性がある，空調系のエネルギーグリッドであるサーマルグリッドシステムが注目されている(実際インテックス大阪に導入されている)。しかし、本システムはかなり運転自由度が高いため実際運用する際に運用計画を建てることが非常に難しい。そこで、このシステムを2種類の数理計画モデルで表現し、最適化ソルバーであるCplexを用いて目標温度を踏まえたある一定期間の最適な運用計画をそれぞれ求め比較した。'),
  createData1('海外での研究内容', 'Brock大学大学院にて<a href="http://www.cosc.brocku.ca/~bombuki/" target="_blank" style="font-weight: bold; text-decoration: none; color: #ffa500; font-family: serif;">Ombuki教授</a>の下、1年間群知能を勉強。留学期間前半の授業、自習等で遺伝的アルゴリズム、アントコロニー最適化及び粒子群最適化の基礎について学び、NP問題として知られる巡回セールスマン及びより実社会に存在する問題に近い時間制約付き配送経路問題に遺伝的アルゴリズム、アントコロニー最適化を適用し、結果を比較することでそれぞれの性能を定量的に評価した。遺伝的アルゴリズムについては様々な交叉法、突然変異法及び評価方法を適用、アントコロニー最適化については局所最適化に陥りやすいため、その改良法として知られるアントコロニーシステムにパレートランキングを適用し、それらの違いについても考察した。また、近年高い性能を示すことから注目されるハイブリッド最適化を検証するため、アントコロニーシステムに粒子群最適化によるパラメータチューニングを適用させその結果を考察した。'),
];

const papers_j = [
  createData2(grapaper, '卒業論文'),
  createData2(sci, 'システム制御情報学会提出論文'),
];

const papers_e = [
  createData2(VRPTW, '遺伝的アルゴリズム(授業課題)'),
  createData2(ant_colony, 'アントコロニーシステム'),
  createData2(pso_aco, 'ハイブリッド最適化手法(ACS+PSO)'),
];

class Research extends Component {
  render() {
  	const { classes } = this.props;

    return (
    	<Container maxWidth="95%">
	    	{contents.map(contents => (
	    		<Box mb={5} minWidth="90%">
			    	<Paper style={{backgroundColor: '#f5f5f5'}}>
				    	<Box p={3}>
				    		<Box pb={2}>
								<Typography variant="h4">{contents.title}</Typography>
							</Box>
							<Box pl={2} pb={2}>
							<Typography>
								<div dangerouslySetInnerHTML={{ __html: contents.content}} ></div>
							</Typography>
							</Box>
							<Box pl={2}>
							{contents.title === '日本での研究内容' ?
								papers_j.map(papers => (
								<Typography>
									<a href={papers.url} target="_blank" rel="noopener noreferrer" className={classes.anchor}>{papers.title}</a>
								</Typography>
								)) :
								papers_e.map(papers => (
								<Typography>
									<a href={papers.url} target="_blank" rel="noopener noreferrer" className={classes.anchor}>{papers.title}</a>
								</Typography>
							))}
							{contents.title === '海外での研究内容' &&
								<Box pt={2}>
									<img src={ombuki} alt="ombuki" className={classes.img}/>
								</Box>
							}
							</Box>
						</Box>
					</Paper>
				</Box>
			))}		
        </Container>
    );
  }
}

export default withStyles(styles)(Research);
