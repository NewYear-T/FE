import Header from "~/components/Header";
import Logo from '~/asset/Logo.svg';
import { Card, CardHeader, CardBody, Image} from '@nextui-org/react';
import student from '~/asset/student.png';
import teacher from '~/asset/teacher.png';

const Community = () => {
  return (
      <>  <div style={{marginLeft: "15px"}}>
          <Header
              title=""
              subtitle=""
              logo={Logo}
          />
          </div>
          <div style={{fontSize: "40px", marginLeft: "120px", marginTop: "20px"}}>
              유저 랭킹
          </div>
          <div>
              <Card style={{width: "300px", marginLeft: "50px", marginTop: "15px"}}>
                  <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                      <div className="ml-2">
                          <p className="text-tiny uppercase font-bold">성공한 챌린지</p>
                          <small className={"text-default-500"}>12개</small>
                          <h4 className="font-bold text-large">닉네임</h4>
                      </div>
                  </CardHeader>
                  <CardBody className="overflow-visible py-2 justify-center items-center">
                      <Image
                          alt="Card background"
                          className="object-cover rounded-xl"
                          src={teacher}
                          width={240}
                      />
                  </CardBody>
              </Card>
          </div>
          <div>
              <Card style={{width: "300px", marginLeft: "50px", marginTop: "15px"}}>
                  <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                      <div className="ml-2">
                          <p className="text-tiny uppercase font-bold">성공한 챌린지</p>
                          <small className={"text-default-500"}>12개</small>
                          <h4 className="font-bold text-large">닉네임</h4>
                      </div>
                  </CardHeader>
                  <CardBody className="overflow-visible py-2 justify-center items-center">
                      <Image
                          alt="Card background"
                          className="object-cover rounded-xl"
                          src={student}
                          width={240}
                      />
                  </CardBody>
              </Card>
          </div>
      </>
  );
};

export default Community;
