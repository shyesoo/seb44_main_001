import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/RootStore';

import { FaArrowRightFromBracket } from 'react-icons/fa6';
import AlramModal from './Alram/components/views/AlramModal';
import Button from './Button';
import { resetStates } from '../../pages/Login/store/MyUserData';

import logo from '../assets/logo/MOMO.png';
import profile from '../assets/profile.svg';

export default function Header() {
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const myData = useSelector((state: RootState) => state.myData);
  const myId = useSelector((state: RootState) => state.token.memberId);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (myData && myData.nickname) {
      setIsLogged(true);
      console.log('setIsLogged true로 변경');
    } else {
      setIsLogged(false);
      console.log('setIsLogged false로 변경');
    }
  }, [myData]);

  const handleLogout = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(resetStates());
    navigate('/login');
  };

  const handleMyProfile = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(`/user/${myId}`, { state: myId });
  };

  return (
    <Head>
      <Link to="/">
        <div>
          <img src={logo} alt="로고이미지" style={{ height: '39px' }} />
        </div>
      </Link>
      {isLogged && myData ? (
        <MenuContainer>
          <Link to="/lists" className="margin-small text">
            모모리스트
          </Link>
          <UserContainer onClick={handleMyProfile}>
            <img
              src={profile}
              alt="프로필사진"
              className="margin-left icon user-content"
            />
            <div className="text" style={{ marginLeft: '5px' }}>
              {myData.nickname}
            </div>
          </UserContainer>
          <div
            className="margin-left user-content"
            style={{ marginTop: '2px' }}
          >
            <AlramModal />
          </div>
          <div className="margin-left">
            <div onClick={handleLogout}>
              <LogOut size={20} />
            </div>
          </div>
        </MenuContainer>
      ) : (
        <MenuContainer>
          <Link to="/login" className="text">
            <Button children={'로그인'} onClick={handleLogout}></Button>
          </Link>
          <Link to="/signup" className="text margin-left">
            <Button children={'회원가입'}></Button>
          </Link>
        </MenuContainer>
      )}
    </Head>
  );
}

const Head = styled.header`
  display: flex;
  position: sticky;
  top: 0;
  z-index: 1000;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: white;
  color: var(--color-black);

  .margin-small {
    margin: 10px;
  }

  .margin-left {
    margin-left: 10px;
  }

  .icon {
    width: 25px;
    height: 25px;
    align-items: center;
  }

  .text {
    color: var(--color-black);
  }

  .user-content {
    pointer-events: none;
  }
`;

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const LogOut = styled(FaArrowRightFromBracket)`
  color: var(--color-black);
`;
