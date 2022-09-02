import {lazy} from "react";

const IncidentList = lazy(() => {
  return import("modules/General/components/incident/index");
});
const ActivityLogList = lazy(() => {
  return import("pages/histories/components/activityLog/index");
});
const TasksForm = lazy(() =>
  import("modules/WM/components/taskManagement/index")
);
const TelecomCenter = lazy(() =>
  import("modules/IM/components/telecomcenter/index")
);
// Screens Components
const Dashbaord = lazy(() => import("pages/dashboard/index"));
const Info = lazy(() => import("pages/info"));
const Profile = lazy(() => import("pages/profile/index"));

// PLM Components
const MainPage = lazy(() => import("modules/PLM/index"));
const UseBandwidth = lazy(() =>
  import("modules/PLM/components/useService/index")
);
//OM Components
const WorkSpaceList = lazy(() => import("modules/OM/index"));
const Orders = lazy(() => import("modules/OM/components/inquiry/index"));
const MPLSRials = lazy(() =>
  import("modules/OM/components/inquiry/MPLSRials/index")
);

const MPLSForeign = lazy(() =>
  import("modules/OM/components/inquiry/MPLSForeign/index")
);

const IpTransit = lazy(() =>
  import("modules/OM/components/inquiry/IpTransit/index")
);
const CapTransit = lazy(() =>
  import("modules/OM/components/inquiry/CapTransit/index")
);

const InterPTP = lazy(() =>
  import("modules/OM/components/inquiry/InterPTP/index")
);

const Ticketing = lazy(() =>
  import("modules/OM/components/inquiry/Ticketing/index")
);
// CM Components
const Agreement = lazy(() => import("modules/CM/index"));

// IM COMPONENT
const IM = lazy(() => import("modules/IM/index"));
const Customers = lazy(() => import("modules/IM/components/customers/index"));
const ChangeCustomerPassword = lazy(() =>
  import("modules/IM/components/changeCustomerPassword")
);
const CustomersInfo = lazy(() =>
  import("modules/IM/components/customers/components/TabsWrapper")
);
const UserDocuments = lazy(() =>
  import("modules/IM/components/userDocuments/index")
);
const CustomersTypes = lazy(() =>
  import("modules/IM/components/customersTypes/index")
);

const CustomersGroups = lazy(() =>
  import("modules/IM/components/customersGroups/index")
);
const GroupCustomerList = lazy(() =>
  import("modules/IM/components/customersGroups/components/groupCustomerList/index")
);
// SM
const SM = lazy(() => import("modules/SM/index"));
const PasswordManagement = lazy(() =>
  import("modules/SM/components/passwordManagement/index")
);
const RolesManagement = lazy(() =>
  import("modules/SM/components/roleManagement/index")
);
const GroupManagement = lazy(() =>
  import("modules/SM/components/groupManagement/index")
);
const UsersManagement = lazy(() =>
  import("modules/SM/components/userManagement/index")
);
const Announcement = lazy(() => import("pages/announcement/index"));
//billing
const Billing = lazy(() => import("modules/Billing/index"));
const Settings = lazy(() => import("pages/settings/index"));
//assignment
const AutoAssigning = lazy(() =>
  import("modules/SM/components/taskAssignmentRuleManagement/AutoAssigning")
);
const TicketSubjectAssignment = lazy(() =>
    import("modules/SM/components/taskAssignmentRuleManagement/TicketSubjectAssignment")
);
const ProvincialAssigning = lazy(() =>
    import("modules/SM/components/taskAssignmentRuleManagement/ProvincialAssigning")
);
const DueDateAssigning = lazy(() =>
  import("modules/SM/components/taskAssignmentRuleManagement/DueDateAssigning")
);
const MessageTemplate = lazy(() =>
  import("pages/settings/components/messageTemplate/index")
);
const DocumentTemplate = lazy(() =>
  import("pages/settings/components/documentTemplate/index")
);
const IntegrationCode = lazy(() =>
  import("pages/settings/components/IntegrationCode/index")
);
const Notice = lazy(() => import("pages/settings/components/notice/index"));
const TariffPlans = lazy(() =>
  import("modules/Pricing/components/tariffPlan/index")
);

const TariffPlanDetail = lazy(() =>
  import("modules/Pricing/components/tariffPlan/components/tariffTabs")
);

const TariffRuleDetail = lazy(() =>
  import("modules/Pricing/components/tariffPlan/components/ruleTabs")
);
const InternationalVoiceContracts = lazy(() =>
  import("modules/SM/components/internationalCustomerTrf/index")
);
const Sso = lazy(() =>
    import("modules/SM/components/SSO/index")
);
const Histories = lazy(() => import("pages/histories/index"));

const AssignTaskLog = lazy(() =>
  import("pages/histories/components/assignTaskLog/index")
);

const RemoteTaskLog = lazy(() =>
  import("pages/histories/components/remoteTaskLog/index")
);

const LoginHistory = lazy(() =>
  import("pages/histories/components/loginHistory/index")
);
const AuditHistory = lazy(() =>
  import("pages/histories/components/auditLog/index")
);

const InquiryList = lazy(() =>
  import("modules/OM/components/InquiryList/index")
);

const Attachments = lazy(() => import("modules/OM/components/attachments/index"));
const SurveysList = lazy(() => import("modules/OM/components/surveysList/index"));
const FeedbackList = lazy(() => import("modules/OM/components/feedbackList/index"));

const Workflows = lazy(() => import("modules/WM/index"));

const ActivationList = lazy(() =>
  import("modules/OM/components/inquiry/activationList")
);

const Report = lazy(() => import("modules/Reporting/index"));
const ReportOrders = lazy(() =>
  import("modules/Reporting/components/orders/index")
);
const Reports360 = lazy(() =>
  import("modules/Reporting/components/360degree/index")
);
const ReportTasks = lazy(() =>
  import("modules/Reporting/components/tasks/index")
);

const routes = [
  // Screens Routes
  {
    path: "/",
    name: "Dashboard",
    component: Dashbaord,
    breadcrumbName: "Breadcrumb.dashboard",
    exact: true,
    isSecure: true,
  },
  {
    path: "/workspace",
    name: "Workspace",
    component: WorkSpaceList,
    breadcrumbName: "Breadcrumb.Work Space",
    exact: true,
    isSecure: "workspace.view",
  },
  {
    path: "/announcement",
    name: "announcement",
    component: Announcement,
    breadcrumbName: "Breadcrumb.announcement",
    exact: true,
    isSecure: true,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    breadcrumbName: "layout.profile",
    exact: true,
    isSecure: true,
  },
  // PLM Routes
  {
    path: "/PLM",
    name: "PLM",
    component: MainPage,
    breadcrumbName: "Breadcrumb.PLM.Main",
    exact: true,
    isSecure: "plm.products.view",
  },
  {
    path: "/PLM/use-service",
    name: "Use Service",
    component: UseBandwidth,
    breadcrumbName: "Breadcrumb.PLM.Use Service",
    exact: true,
    isSecure: true,
  },
  {
    path: "/PLM/substructure",
    name: "Use Service",
    component: UseBandwidth,
    breadcrumbName: "Breadcrumb.PLM.substructure",
    exact: true,
    isSecure: true,
  },
  {
    path: "/PLM/extra-service",
    name: "Use Service",
    component: UseBandwidth,
    breadcrumbName: "Breadcrumb.PLM.extra Service",
    exact: true,
    isSecure: true,
  },
  //CM Routes
  {
    path: "/agreements",
    name: "Agreements",
    component: Agreement,
    breadcrumbName: "Breadcrumb.Agreements",
    exact: true,
    isSecure: "cm.list",
  },
  //IM Routes

  {
    path: "/im/customers/change-password",
    name: "ChangeCustomerPassword",
    component: ChangeCustomerPassword,
    breadcrumbName: "Breadcrumb.IM.changePassword",
    isSecure: "im.customers.change-password",
  },
  {
    path: "/im/customers/customers-info",
    name: "CustomersInfo",
    component: CustomersInfo,
    breadcrumbName: "Breadcrumb.IM.customer-info",
    isSecure: "im.customers.view",
  },
  {
    path: "/im/customers",
    name: "Customers",
    component: Customers,
    breadcrumbName: "Breadcrumb.IM.Customers",
    isSecure: "im.customers.list",
  },

  {
    path: "/im/userDocuments",
    name: "UserDocuments",
    component: UserDocuments,
    breadcrumbName: "Breadcrumb.UserDocuments",
    isSecure: true,
  },
  {
    path: "/im/customers-types",
    name: "CustomersTypes",
    component: CustomersTypes,
    breadcrumbName: "Breadcrumb.CustomersTypes",
    isSecure: "im.customercategory.list",
  },
  {
    path: "/im/customers-groups/group-customer-list/:id",
    name: "GroupCustomerList",
    component: GroupCustomerList,
    breadcrumbName: "Breadcrumb.GroupCustomerList",
    isSecure: true,
  },
  {
    path: "/im/customers-groups",
    name: "CustomersGroups",
    component: CustomersGroups,
    breadcrumbName: "Breadcrumb.CustomersGroups",
    isSecure: true,
  },
  {
    path: "/im",
    name: "IM",
    component: IM,
    breadcrumbName: "Breadcrumb.User Management",
    exact: true,
    isSecure: "im.view",
  },

  // SM
  {
    path: "/sm/change-password",
    name: "PasswordManagement",
    component: PasswordManagement,
    breadcrumbName: "Breadcrumb.SM.PasswordManagement",
    isSecure: "sm.change-password",
  },
  {
    path: "/sm/roles",
    name: "RolesManagement",
    component: RolesManagement,
    breadcrumbName: "Breadcrumb.SM.RolesManagement",
    isSecure: "sm.roles.list",
  },
  {
    path: "/sm/groups",
    name: "GroupManagement",
    component: GroupManagement,
    breadcrumbName: "Breadcrumb.SM.GroupManagement",
    isSecure: "sm.groups.list",
  },
  {
    path: "/sm/users",
    name: "UsersManagment",
    component: UsersManagement,
    breadcrumbName: "layout.menu.users",
    isSecure: "sm.users.list",
  },
  {
    path: "/sm",
    name: "Security Management",
    component: SM,
    breadcrumbName: "layout.menu.sm",
    isSecure: "sm.view",
  },

  //billing
  {
    path: "/billing",
    name: "Billing",
    component: Billing,
    breadcrumbName: "layout.menu.billing",
    isSecure: "billing.list",
  },
  // breadcrumbName: "Breadcrumb.reporting",
  {
    path: "/settings/wm",
    name: "workflows",
    component: Workflows,
    breadcrumbName: "Breadcrumb.Settings.Workflows",
    isSecure: "settings.proccesses.list",
  },
  {
    path: "/settings/telecomcenters",
    name: "TelecomCenterList",
    component: TelecomCenter,
    breadcrumbName: "Breadcrumb.Settings.telecomcenters",
    isSecure: "settings.telecomcenters.list",
  },

  {
    path: "/settings/incidents",
    name: "IncidentList",
    component: IncidentList,
    breadcrumbName: "Breadcrumb.Settings.incidents",
    exact: true,
    isSecure: "settings.incidents.list",
  },
  //task assignment rules
  {
    path: "/settings/workflow-version",
    name: "WorkFlowVersion",
    component: Info,
    breadcrumbName: "Breadcrumb.Settings.workflow_versions",
    isSecure: true,
  },
  //tasks
  {
    path: "/settings/tasksform",
    name: "TasksForm",
    component: TasksForm,
    breadcrumbName: "Breadcrumb.Settings.tasksform",
    isSecure: "settings.duties.list",
  },
  //inquiry parameter
  {
    path: "/settings/workflow_parameters",
    name: "WorkflowParameters",
    component: Info,
    breadcrumbName: "Breadcrumb.Settings.workflow_parameters",
    isSecure: true,
  },
  //system message
  {
    path: "/settings/system_announcements",
    name: "SystemAnouncements",
    component: MessageTemplate,
    breadcrumbName: "Breadcrumb.Settings.system_anouncements",
    isSecure: "settings.system_anouncements.list",
  },
  //system document Templates
  {
    path: "/settings/document_templates",
    name: "DocumentTemplate",
    component: DocumentTemplate,
    breadcrumbName: "Breadcrumb.Settings.document_templates",
    isSecure: "om.document_template.list",
  },{
    path: "/settings/integration-codes",
    name: "IntegrationCodes",
    component: IntegrationCode,
    breadcrumbName: "Breadcrumb.Settings.integration_codes",
    isSecure: "om.document_template.list",
  },
  //notice
  {
    path: "/settings/notice",
    name: "Notice",
    component: Notice,
    breadcrumbName: "Breadcrumb.Settings.notice",
    isSecure: "settings.notices.list",
  },
  //task auto assigning
  {
    path: "/settings/auto-assigning",
    name: "AutoAssigning",
    component: AutoAssigning,
    breadcrumbName: "Breadcrumb.Settings.auto_assigning",
    isSecure: "settings.auto_assignement.list",
  },
  //task ticket subject assigning
  {
    path: "/settings/ticket-subject-assigning",
    name: "TicketSubjectAssignment",
    component: TicketSubjectAssignment,
    breadcrumbName: "Breadcrumb.Settings.ticket_subject_assignment",
    isSecure: "settings.auto_assignement.list",
  },
  //task provincial assigning
  {
    path: "/settings/provincial-assigning",
    name: "ProvincialAssigning",
    component: ProvincialAssigning,
    breadcrumbName: "Breadcrumb.Settings.provincial-assignment",
    isSecure: "settings.auto_assignement.list",
  },
  //task duedate assigning
  {
    path: "/settings/due-date-assigning",
    name: "DueSateAssigning",
    component: DueDateAssigning,
    breadcrumbName: "Breadcrumb.Settings.due_date_assigning",
    isSecure: "settings.due_date_assignment.list",
  },
  //settings
  {
    path: "/settings",
    name: "Settings",
    component: Settings,
    breadcrumbName: "layout.menu.settings",
    exact: true,
    isSecure: "settings.view",
  },
  {
    path: "/settings/tariff-plans",
    name: "tariff-plan",
    component: TariffPlans,
    breadcrumbName: "Breadcrumb.Settings.tariff_plans",
    exact: true,
    isSecure: "settings.tariffs.list",
  },
  {
    path: "/settings/tariff-plans/rules-and-details",
    name: "tariffDetail",
    component: TariffPlanDetail,
    breadcrumbName: "Breadcrumb.Settings.tariff_plan_detail",
    exact: true,
    isSecure: true,
  },
  {
    path: "/settings/tariff-plans/rules-and-details/rule-details-and-expressions",
    name: "expressions",
    component: TariffRuleDetail,
    breadcrumbName: "Breadcrumb.Settings.tariff_rule_detail",
    exact: true,
    isSecure: true,
  }, {
    path: "/settings/InternationalVoiceContracts",
    name: "InternationalVoiceContracts",
    component: InternationalVoiceContracts,
    breadcrumbName: "Breadcrumb.Settings.InternationalVoiceContracts",
    isSecure: true,
  },{
    path: "/settings/SSO",
    name: "Sso",
    component: Sso,
    breadcrumbName: "Breadcrumb.Settings.InternationalVoiceContracts",
    isSecure: true,
  },
  // OM
  {
    path: "/om/inquiryList/MPLSRials",
    name: "MPLSRials",
    component: MPLSRials,
    breadcrumbName: "Breadcrumb.MPLSRials",
    isSecure: true,
  },
  {
    path: "/om/inquiryList/MPLSForeign",
    name: "MPLSForeign",
    component: MPLSForeign,
    breadcrumbName: "Breadcrumb.MPLSForeign",
    isSecure: true,
  },
  {
    path: "/om/inquiryList/ip-transit",
    name: "IpTransit",
    component: IpTransit,
    breadcrumbName: "Breadcrumb.IpTransit",
    isSecure: true,
  },
  {
    path: "/om/inquiryList/capacity-transit",
    name: "CapTransit",
    component: CapTransit,
    breadcrumbName: "Breadcrumb.CapTransit",
    isSecure: true,
  },
  {
    path: "/om/inquiryList/inter-ptp",
    name: "InterPTP",
    component: InterPTP,
    breadcrumbName: "Breadcrumb.InterPTP",
    isSecure: true,
  },
  {
    path: "/om/inquiryList",
    name: "inquiryList",
    component: ActivationList,
    breadcrumbName: "Breadcrumb.InquiryList",
    exact: true,
    isSecure: true,
  },
  {
    path: "/om/attachments",
    name: "attachments",
    component: Attachments,
    breadcrumbName: "Breadcrumb.Attachments",
    exact: true,
    isSecure: "attachments.view",
  },
  {
    path: "/om/surveysList",
    name: "surveysList",
    component: SurveysList,
    breadcrumbName: "Breadcrumb.SurveysList",
    exact: true,
    isSecure: "om.survey",
  },
  {
    path: "/om/feedbackList",
    name: "feedbackList",
    component: FeedbackList,
    breadcrumbName: "Breadcrumb.FeedbackList",
    exact: true,
    isSecure: true,
  },
  {
    path: "/om",
    name: "Orders",
    component: Orders,
    breadcrumbName: "Breadcrumb.Services",
    exact: true,
    isSecure: "om.view",
  },

  //ticketing
  {
    path: "/ticketing",
    name: "Ticketing",
    component: Ticketing,
    breadcrumbName: "Breadcrumb.Ticketing",
    isSecure: "ticket.create_new",
  },
  {
    path: "/histories",
    name: "Histories",
    component: Histories,
    breadcrumbName: "Breadcrumb.Histories",
    exact: true,
    isSecure: "histories.view",
  },
  {
    path: "/histories/assign-task-log",
    name: "assign-task-log",
    component: AssignTaskLog,
    breadcrumbName: "Breadcrumb.AssignTaskLog",
    isSecure: "histories.assign_task_log.list",
  },
  {
    path: "/histories/remote-task-log",
    name: "assign-task-log",
    component: RemoteTaskLog,
    breadcrumbName: "Breadcrumb.RemoteTaskLog",
    isSecure: "histories.remote_task_log.list",
  },
  {
    path: "/histories/login-history",
    name: "login-history",
    component: LoginHistory,
    breadcrumbName: "Breadcrumb.LoginHistory",
    isSecure: "histories.login_history.list",
  }, {
    path: "/histories/audit-history",
    name: "audit-history",
    component: AuditHistory,
    breadcrumbName: "Breadcrumb.AuditLog",
    isSecure: "histories.login_history.list",
  },
  {
    path: "/histories/activitylogs",
    name: "ActivityLogList",
    component: ActivityLogList,
    breadcrumbName: "Breadcrumb.Settings.activitylogs",
    isSecure: "settings.logs.list",
  },
  {
    path: "/om/inquiries",
    name: "inquiries",
    component: InquiryList,
    breadcrumbName: "Breadcrumb.InquiryList",
    exact: true,
    isSecure: "om.list",
  },

  {
    path: "/reports/tasks",
    name: "tasks",
    component: ReportTasks,
    breadcrumbName: "Breadcrumb.tasks",
    isSecure: "reporting.tasks",
  },
  {
    path: "/reports/orders",
    name: "orders",
    component: ReportOrders,
    breadcrumbName: "Breadcrumb.orders",
    isSecure: "reporting.orders",
  },{
    path: "/reports/customer-360",
    name: "orders",
    component: Reports360,
    breadcrumbName: "Breadcrumb.Report360",
    isSecure: "reporting.orders",
  },
  {
    path: "/reports",
    name: "report",
    component: Report,
    breadcrumbName: "Breadcrumb.report",
    exact: true,
    isSecure: "reporting.list",
  },
];

export default routes;
