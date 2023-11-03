import {
  Button,
  Card,
  Checkbox,
  Col,
  Descriptions,
  FloatButton,
  Modal,
  Popconfirm,
  Row,
  Space,
} from "antd";
import "./index.less";
import {
  InitalUsers,
  User,
  UserAttribute,
  UserAttributeMap,
  UserStatus,
  UserStatusMap,
  WoundColors,
} from "../constants";
import { useLocalStorageState } from "ahooks";
import {
  MinusOutlined,
  PlusOutlined,
  CheckOutlined,
  RetweetOutlined,
} from "@ant-design/icons";
import { cloneDeep } from "lodash-es";

export default function PageHome() {
  const [users, setUsers] = useLocalStorageState<User[]>("users", {
    defaultValue: cloneDeep(InitalUsers),
  });

  return (
    <>
      <Row className="page">
        {users?.map((user, userIndex) => {
          const onUserChange = (newAttribute: Partial<User>) => {
            const newUsers = [...(users ?? [])];
            newUsers[userIndex] = {
              ...newUsers[userIndex],
              ...newAttribute,
            };
            setUsers(newUsers);
          };
          return (
            <Col key={user.name} span={6}>
              <Card>
                <Space align="start">
                  <div>
                    <img src={user.img} className="avatar" />
                  </div>
                  <div>
                    {/* 标题 */}
                    <h3 className="title">
                      {user.job} / {user.name}
                    </h3>

                    {/* 任务属性值 */}
                    <Descriptions
                      className="attributes"
                      column={1}
                      labelStyle={{ width: 60 }}
                      items={Object.entries(UserAttributeMap).map(
                        (attribute) => {
                          const field = attribute[0] as UserAttribute;
                          const fieldName = attribute[1];
                          const isWound = !!user.wound;
                          return {
                            key: field,
                            label: fieldName,
                            children: (
                              <Space align="center">
                                <Button
                                  size="small"
                                  type="text"
                                  icon={<MinusOutlined />}
                                  onClick={() =>
                                    onUserChange({
                                      [field]: user[field] - 1,
                                    })
                                  }
                                ></Button>
                                <span className="attribute-number">
                                  {user[field] +
                                    (isWound
                                      ? ` - 10 = ${user[field] - 10}`
                                      : "")}
                                </span>
                                <Button
                                  size="small"
                                  type="text"
                                  icon={<PlusOutlined />}
                                  onClick={() =>
                                    onUserChange({
                                      [field]: user[field] + 1,
                                    })
                                  }
                                ></Button>
                              </Space>
                            ),
                          };
                        }
                      )}
                    ></Descriptions>
                    <div className="wound-list">
                      {WoundColors.map((color, colorIndex) => (
                        <div
                          key={color}
                          style={{
                            backgroundColor: color,
                            opacity: user.wound === colorIndex ? 1 : undefined,
                          }}
                          onClick={() =>
                            onUserChange({
                              wound: colorIndex,
                            })
                          }
                        >
                          {user.wound === colorIndex && <CheckOutlined />}
                        </div>
                      ))}
                    </div>
                  </div>
                </Space>

                <h4>技能</h4>

                <Descriptions
                  className="skills"
                  column={1}
                  labelStyle={{ width: 80 }}
                  colon={false}
                  items={[user.skill1Info, user.skill2Info].map((skill) => {
                    return {
                      key: skill.name,
                      label: skill.name,
                      children: skill.description,
                    };
                  })}
                ></Descriptions>

                <h4>状态</h4>
                <Descriptions
                  className="attributes"
                  column={2}
                  colon={false}
                  labelStyle={{ width: 80 }}
                  items={Object.entries(UserStatusMap).map((status) => {
                    const field = status[0] as UserStatus;
                    const fieldName = status[1];
                    return {
                      key: field,
                      label: fieldName,
                      children: (
                        <Checkbox
                          checked={user[field]}
                          onChange={() =>
                            onUserChange({
                              [field]: !user[field],
                            })
                          }
                        />
                      ),
                    };
                  })}
                ></Descriptions>
              </Card>
            </Col>
          );
        })}
      </Row>
      <FloatButton
        icon={<RetweetOutlined />}
        onClick={() => {
          Modal.confirm({
            title: "提示",
            content: "确认重置角色卡？",
            onOk: () => {
              setUsers(cloneDeep(InitalUsers));
            },
          });
        }}
      />
    </>
  );
}
