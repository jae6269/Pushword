import classNames from 'classnames/bind';
import styles from './SearchPage.module.scss';
import useGetUser from '@/hooks/useGetUser';
import { useRouter } from 'next/router';
import { URL_LIST } from '@/constants/url';
import { useMenuStore } from '@/store/store';

const cn = classNames.bind(styles);

export default function Search() {
  const user = useGetUser();
  const router = useRouter();
  const { setMenu } = useMenuStore();
  if (!user) {
    alert('로그인이 필요합니다.');
    router.push(URL_LIST.account);
    setMenu('account');
    //확인 : 비로그인시 로그인 화면으로이동하도록 (나중에 alert-> modal로 변경)
  }
  return <div className={cn('container')}> 검색</div>;
}
