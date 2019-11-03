(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{306:function(e,t,r){"use strict";r.r(t);var o=r(0),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"using-cgroups-with-yarn"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#using-cgroups-with-yarn","aria-hidden":"true"}},[e._v("#")]),e._v(" Using CGroups with YARN")]),e._v(" "),r("ul",[r("li",[e._v("CGroups Configuration")]),e._v(" "),r("li",[e._v("CGroups mount options")]),e._v(" "),r("li",[e._v("CGroups and security")])]),e._v(" "),r("p",[e._v("CGroups is a mechanism for aggregating/partitioning sets of tasks, and all their future children, into hierarchical groups with specialized behaviour. CGroups is a Linux kernel feature and was merged into kernel version 2.6.24. From a YARN perspective, this allows containers to be limited in their resource usage. A good example of this is CPU usage. Without CGroups, it becomes hard to limit container CPU usage.")]),e._v(" "),r("h2",{attrs:{id:"cgroups-configuration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cgroups-configuration","aria-hidden":"true"}},[e._v("#")]),e._v(" CGroups Configuration")]),e._v(" "),r("p",[e._v("This section describes the configuration variables for using CGroups.")]),e._v(" "),r("p",[e._v("The following settings are related to setting up CGroups. These need to be set in yarn-site.xml.")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Configuration Name")]),e._v(" "),r("th",[e._v("Description")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("yarn.nodemanager.container-executor.class")]),e._v(" "),r("td",[e._v("This should be set to “org.apache.hadoop.yarn.server.nodemanager.LinuxContainerExecutor”. CGroups is a Linux kernel feature and is exposed via the LinuxContainerExecutor.")])]),e._v(" "),r("tr",[r("td",[e._v("yarn.nodemanager.linux-container-executor.resources-handler.class")]),e._v(" "),r("td",[e._v("This should be set to “org.apache.hadoop.yarn.server.nodemanager.util.CgroupsLCEResourcesHandler”. Using the LinuxContainerExecutor doesn’t force you to use CGroups. If you wish to use CGroups, the resource-handler-class must be set to CGroupsLCEResourceHandler.")])]),e._v(" "),r("tr",[r("td",[e._v("yarn.nodemanager.linux-container-executor.cgroups.hierarchy")]),e._v(" "),r("td",[e._v("The cgroups hierarchy under which to place YARN proccesses(cannot contain commas). If yarn.nodemanager.linux-container-executor.cgroups.mount is false (that is, if cgroups have been pre-configured) and the YARN user has write access to the parent directory, then the directory will be created. If the directory already exists, the administrator has to give YARN write permissions to it recursively.")])]),e._v(" "),r("tr",[r("td",[e._v("yarn.nodemanager.linux-container-executor.cgroups.mount")]),e._v(" "),r("td",[e._v("Whether the LCE should attempt to mount cgroups if not found - can be true or false.")])]),e._v(" "),r("tr",[r("td",[e._v("yarn.nodemanager.linux-container-executor.cgroups.mount-path")]),e._v(" "),r("td",[e._v("Optional. Where CGroups are located. LCE will try to mount them here, if yarn.nodemanager.linux-container-executor.cgroups.mount is true. LCE will try to use CGroups from this location, if yarn.nodemanager.linux-container-executor.cgroups.mount is false. If specified, this path and its subdirectories (CGroup hierarchies) must exist and they should be readable and writable by YARN before the NodeManager is launched. See CGroups mount options below for details.")])]),e._v(" "),r("tr",[r("td",[e._v("yarn.nodemanager.linux-container-executor.group")]),e._v(" "),r("td",[e._v("The Unix group of the NodeManager. It should match the setting in “container-executor.cfg”. This configuration is required for validating the secure access of the container-executor binary.")])])])]),e._v(" "),r("p",[e._v("The following settings are related to limiting resource usage of YARN containers:")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Configuration Name")]),e._v(" "),r("th",[e._v("Description")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("yarn.nodemanager.resource.percentage-physical-cpu-limit")]),e._v(" "),r("td",[e._v("This setting lets you limit the cpu usage of all YARN containers. It sets a hard upper limit on the cumulative CPU usage of the containers. For example, if set to 60, the combined CPU usage of all YARN containers will not exceed 60%.")])]),e._v(" "),r("tr",[r("td",[e._v("yarn.nodemanager.linux-container-executor.cgroups.strict-resource-usage")]),e._v(" "),r("td",[e._v("CGroups allows cpu usage limits to be hard or soft. When this setting is true, containers cannot use more CPU usage than allocated even if spare CPU is available. This ensures that containers can only use CPU that they were allocated. When set to false, containers can use spare CPU if available. It should be noted that irrespective of whether set to true or false, at no time can the combined CPU usage of all containers exceed the value specified in “yarn.nodemanager.resource.percentage-physical-cpu-limit”.")])])])]),e._v(" "),r("h2",{attrs:{id:"cgroups-mount-options"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cgroups-mount-options","aria-hidden":"true"}},[e._v("#")]),e._v(" CGroups mount options")]),e._v(" "),r("p",[e._v("YARN uses CGroups through a directory structure mounted into the file system by the kernel. There are three options to attach to CGroups.")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Option")]),e._v(" "),r("th",[e._v("Description")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("Discover CGroups mounted already")]),e._v(" "),r("td",[e._v("This should be used on newer systems like RHEL7 or Ubuntu16 or if the administrator mounts CGroups before YARN starts. Set yarn.nodemanager.linux-container-executor.cgroups.mount to false and leave other settings set to their defaults. YARN will locate the mount points in /proc/mounts. Common locations include /sys/fs/cgroup and /cgroup. The default location can vary depending on the Linux distribution in use.")])]),e._v(" "),r("tr",[r("td",[e._v("CGroups mounted by YARN")]),e._v(" "),r("td",[e._v("IMPORTANT: This option is deprecated due to security reasons with the container-executor.cfg option feature.mount-cgroup.enabled=0 by default. Please mount cgroups before launching YARN.")])]),e._v(" "),r("tr",[r("td",[e._v("CGroups mounted already or linked but not in /proc/mounts")]),e._v(" "),r("td",[e._v("If cgroups is accessible through lxcfs or simulated by another filesystem, then point yarn.nodemanager.linux-container-executor.cgroups.mount-path to your CGroups root directory. Set yarn.nodemanager.linux-container-executor.cgroups.mount to false. YARN tries to use this path first, before any CGroup mount point discovery. The path should have a subdirectory for each CGroup hierarchy named by the comma separated CGroup subsystems supported like "),r("path",[e._v("/cpu,cpuacct. Valid subsystem names are cpu, cpuacct, cpuset, memory, net_cls, blkio, freezer, devices.")])])])])]),e._v(" "),r("h2",{attrs:{id:"cgroups-and-security"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cgroups-and-security","aria-hidden":"true"}},[e._v("#")]),e._v(" CGroups and security")]),e._v(" "),r("p",[e._v("CGroups itself has no requirements related to security. However, the LinuxContainerExecutor does have some requirements. If running in non-secure mode, by default, the LCE runs all jobs as user “nobody”. This user can be changed by setting “yarn.nodemanager.linux-container-executor.nonsecure-mode.local-user” to the desired user. However, it can also be configured to run jobs as the user submitting the job. In that case “yarn.nodemanager.linux-container-executor.nonsecure-mode.limit-users” should be set to false.")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("yarn.nodemanager.linux-container-executor.nonsecure-mode.local-user")]),e._v(" "),r("th",[e._v("yarn.nodemanager.linux-container-executor.nonsecure-mode.limit-users")]),e._v(" "),r("th",[e._v("User running jobs")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("(default)")]),e._v(" "),r("td",[e._v("(default)")]),e._v(" "),r("td",[e._v("nobody")])]),e._v(" "),r("tr",[r("td",[e._v("yarn")]),e._v(" "),r("td",[e._v("(default)")]),e._v(" "),r("td",[e._v("yarn")])]),e._v(" "),r("tr",[r("td",[e._v("yarn")]),e._v(" "),r("td",[e._v("false")]),e._v(" "),r("td",[e._v("(User submitting the job)")])])])])])}),[],!1,null,null,null);t.default=n.exports}}]);